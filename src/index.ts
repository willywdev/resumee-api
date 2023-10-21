import Bao from "baojs";

const app = new Bao();
const port = parseInt(process.env.PORT || "4545");

app.get("/", (ctx) => {
  return ctx.sendJson({ message: "Hello World!" });
});

const server = app.listen({ port: port });
console.log(`Server listening on ${server.hostname}:${port}`);
