/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable camelcase */

import body_parser from "body-parser";
import cors from "cors";
import express from "express";
import * as os from "os";
import { pgdb, Task } from "./postgres.mjs";

const app = express();
const port = process.env.PORT || 3004;

// Define routes and middleware here
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));

if (os.platform() === "linux") {
  app.use(
    cors({
      origin: "https://tasks.blem.dev", // Replace with your client's URL
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      credentials: true, // Allow cookies and authentication headers
    }),
  );
} else {
  app.use(
    cors({
      origin: true,
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      credentials: true, // Allow cookies and authentication headers
    }),
  );
}

app.use(express.static("../../client/dist/"));

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on port ${port}`);
});

app.get(
  "/api/tasks",
  async (request: express.Request, response: express.Response) => {
    const { filter, name } = request.query as { filter: string; name: string };

    let query = pgdb.selectFrom("tasks").selectAll();

    if (filter) {
      query = query.where("status", "=", filter);
    }

    if (name) {
      query = query.where("name", "like", `%${name}%`);
    }

    const tasks = await query.orderBy("created_at", "desc").execute();
    return response
      .status(tasks ? 200 : 500)
      .send(tasks ? { success: true, tasks } : { success: false, tasks: [] });
  },
);

app.post(
  "/api/tasks",
  async (request: express.Request, response: express.Response) => {
    const task = await pgdb
      .insertInto("tasks")
      .values(request.body as Task)
      .returningAll()
      .executeTakeFirstOrThrow();
    return response.status(200).send({ success: true, task });
  },
);

app.put(
  "/api/tasks/:id",
  async (request: express.Request, response: express.Response) => {
    const { id } = request.params;
    const task = await pgdb
      .updateTable("tasks")
      .set(request.body as Task)
      .where("id", "=", id)
      .returningAll()
      .executeTakeFirstOrThrow();
    return response.status(200).send({ success: true, task });
  },
);

app.delete(
  "/api/tasks/:id",
  async (request: express.Request, response: express.Response) => {
    const { id } = request.params;
    await pgdb
      .deleteFrom("tasks")
      .where("id", "=", id)
      .returningAll()
      .executeTakeFirstOrThrow();
    return response.status(200).send({ success: true });
  },
);
