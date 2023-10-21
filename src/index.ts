import { Elysia } from "elysia";

const server = new Elysia().get("/", () => "Hello!").listen(3000);

console.log(
  `🦊 Elysia is running at ${server.server?.hostname}:${server.server?.port}`
);
