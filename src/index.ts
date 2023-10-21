import Bao from "baojs";
import info from "./info.json";

const app = new Bao();
const port = parseInt(process.env.PORT || "4545");

app.get("/", (ctx) => {
  return ctx.sendJson(info);
});

const server = app.listen({ port: port });
console.log(`Server listening on ${server.hostname}:${port}`);
