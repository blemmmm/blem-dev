import process from "node:process";

import Fastify from "fastify";
import fastify_static from "@fastify/static";

import cors from "@fastify/cors";

import { pgdb } from "./postgres.mjs";

import type { Task } from "./postgres.mjs";
import path from "node:path";

const fastify = Fastify({ logger: true });

await fastify.register(cors, {
  origin: true,
});

// fastify.get("/", () => {
//   return { hello: "world" };
// });

const html = `
  <!DOCTYPE html>
  <html>
  <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href="/dist/esbuild/esbuild.css" rel="stylesheet">
      <link href="/dist/postcss/postcss.css" rel="stylesheet">
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <script src="https://code.iconify.design/2/2.1.0/iconify.min.js"></script>
  </head>
  <body>
      <div id="root"></div>
      <script src="/dist/esbuild/esbuild.js"></script>
  </body>  
  </html>
`;

const root = path.join(process.cwd(), "../client/dist/");

console.log({ root });

fastify.register(fastify_static, {
  root,
  prefix: "/",
});

fastify.get("/", async (_request, reply) => {
  return reply.status(200).header("Content-Type", "text/html").send(html);
});

fastify.get<{ Querystring: { sort: string; filter: string; name: string } }>(
  "/api/tasks",
  {
    schema: {
      querystring: {
        sort: { type: "string" },
        filter: { type: "string" },
        name: { type: "string" },
      },
    },
  },
  async (request) => {
    const { filter, name } = request.query;

    let query = pgdb.selectFrom("tasks").selectAll();

    if (filter) {
      query = query.where("status", "=", filter);
    }

    if (name) {
      query = query.where("name", "like", `%${name}%`);
    }

    const tasks = await query.orderBy("created_at", "desc").execute();

    return tasks;
  },
);

fastify.post("/api/tasks", async (request) => {
  const task = await pgdb
    .insertInto("tasks")
    .values(request.body as Task)
    .returningAll()
    .executeTakeFirstOrThrow();

  return task;
});

fastify.put<{ Params: { id: string } }>(
  "/api/tasks/:id",
  {
    schema: {
      params: {
        type: "object",
        properties: {
          id: { type: "string" },
        },
      },
    },
  },
  async (request) => {
    const { id } = request.params;
    const task = await pgdb
      .updateTable("tasks")
      .set(request.body as Task)
      .where("id", "=", id)
      .returningAll()
      .executeTakeFirstOrThrow();

    return task;
  },
);

fastify.delete<{ Params: { id: string } }>(
  "/api/tasks/:id",
  async (request) => {
    const { id } = request.params;
    const task = await pgdb
      .deleteFrom("tasks")
      .where("id", "=", id)
      .returningAll()
      .executeTakeFirstOrThrow();

    return task;
  },
);

try {
  await fastify.listen({ port: 3004 });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
