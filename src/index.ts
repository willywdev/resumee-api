import Bao from "baojs";
import info from "./data/info.json";
import serveStatic from "serve-static-bun";

const app = new Bao();
const port = parseInt(process.env.PORT || "4545");

app.get("/", () => {
  return serveStatic("./static/index.html");
});

app.get("/info", (ctx) => {
  return ctx.sendJson(info);
});

const server = app.listen({ port: port });
console.log(`Server listening on ${server.hostname}:${port}`);
