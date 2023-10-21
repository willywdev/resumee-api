import Bao from "baojs";
import info from "./data/info.json";
import skills from "./data/skills.json";
import index from "./data/index.json";

const app = new Bao();
const port = parseInt(process.env.PORT || "4545");

app.get("/", (ctx) => {
  return ctx.sendJson(index);
});

app.get("/info", (ctx) => {
  return ctx.sendJson(info);
});

app.get("/skills", (ctx) => {
  return ctx.sendPrettyJson(skills);
});

app.listen({ port: port });
