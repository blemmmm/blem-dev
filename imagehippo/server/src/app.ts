/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable camelcase */

import * as express from 'express';
import * as cors from 'cors';
import * as fs from 'fs';
import * as path from 'path';
import * as assert from 'assert';
import * as sharp from 'sharp';
import * as cryptojs from 'crypto';
import * as mime_types from 'mime-types';
import * as body_parser from 'body-parser';
import * as multer from 'multer';
import * as os from 'os';

const app = express();
const port = process.env.PORT || 3001;

// Define routes and middleware here
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));

if (os.platform() === 'linux') {
  app.use(
    cors({
      origin: 'https://imagehippo.blem.dev', // Replace with your client's URL
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      credentials: true, // Allow cookies and authentication headers
    }),
  );
} else {
  app.use(
    cors({
      origin: true,
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      credentials: true, // Allow cookies and authentication headers
    }),
  );
}

app.use(express.static('../../client/dist/'));

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on port ${port}`);
});

const temp_dir = path.join(process.cwd(), './temp/');

if (fs.existsSync(temp_dir) === false) {
  fs.mkdirSync(temp_dir);
}

app.post(
  '/upload',
  multer().single('file'),
  async (request: express.Request, response: express.Response) => {
    const { file } = request;
    assert(file instanceof Object);
    const file_buffer = file.buffer;
    const file_hash = cryptojs.createHash('sha224').update(file_buffer).digest('hex');
    const file_extname = path.extname(file.originalname);
    const file_new_name = file_hash.concat(file_extname);

    const old_metadata = await sharp(file_buffer).metadata();

    // convert image data into JPEG format
    const converted_buffer = await sharp(file_buffer).jpeg({ mozjpeg: true }).toBuffer();

    const new_metadata = await sharp(converted_buffer).metadata();

    fs.writeFileSync(path.join(temp_dir, file_new_name), file_buffer);
    return response.status(200).send({
      filename: file_new_name,
      old_metadata,
      new_metadata,
    });
  },
);

app.get('/i/*', (request: any, response: any) => {
  const { url } = request;
  const file_name = url.replace('/i/', '');
  const file_path = path.join(temp_dir, file_name);
  if (fs.existsSync(file_path) === true) {
    // 200
    const file_buffer = fs.readFileSync(file_path);
    const content_type = mime_types.contentType(file_name);
    if (typeof content_type === 'string') {
      return response.status(200).header('Content-Type', content_type).send(file_buffer);
    }
    return response.status(500).send();
  }
  // 404
  return response.status(404).send();
});
