import { Request, Response } from 'express';
import assert from 'assert';
import * as os from 'os';

/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const cors = require('cors');
const Typesense = require('typesense');

const app = express();
const port = process.env.PORT || 3002;

const { TYPESENSE_API_KEY } = process.env;
assert(typeof TYPESENSE_API_KEY === 'string');

const client = new Typesense.Client({
  nodes: [
    {
      host: 'hippodirect-typesense', // docker typesense container
      port: '8108', // For Typesense Cloud use 443
      protocol: 'http', // For Typesense Cloud use https
    },
  ],
  apiKey: TYPESENSE_API_KEY,
  connectionTimeoutSeconds: 2,
});

// Define routes and middleware here

if (os.platform() === 'linux') {
  app.use(
    cors({
      origin: 'https://hippodirect.blem.dev', // Replace with your client's URL
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

app.get('/search', async (req: Request, res: Response) => {
  try {
    const { q, page } = req.query;

    // Perform a search in Typesense
    const searchResults = await client
      .collections('products')
      .documents()
      .search({
        q,
        query_by: 'name,brand',
        per_page: '20',
        sort_by: 'popularity:desc',
        page: page || 1,
      });

    res.json(searchResults.hits);
  } catch (error) {
    res.status(500).json({ error: `Error fetching data: ${error}` });
  }
});
