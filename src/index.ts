import Bao from "baojs";
import info from "./data/info.json";
import skills from "./data/skills.json";

const app = new Bao();
const port = parseInt(process.env.PORT || "4545");

app.get("/info", (ctx) => {
  return ctx.sendJson(info);
});

app.get("/skills", (ctx) => {
  return ctx.sendPrettyJson(skills);
});

const server = app.listen({ port: port });
console.log(`Server listening on ${server.hostname}:${port}`);
