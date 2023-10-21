import Bao from "baojs";
import info from "./data/info.json";
import skills from "./data/skills.json";
import index from "./data/index.json";
import learning from "./data/learning.json";

const app = new Bao();
const port = parseInt(process.env.PORT || "4545");

app.after(async (ctx) => {
  if (ctx.res === null) {
    throw new Error("ctx.res is null");
  }

  // CORS
  ctx.res.headers.set("Access-Control-Allow-Origin", "*");
  ctx.res.headers.set("Access-Control-Allow-Methods", "GET");
  ctx.res.headers.set("Access-Control-Allow-Headers", "Content-Type");

  return ctx;
});

app.get("/", (ctx) => {
  return ctx.sendJson(index);
});

app.get("/learning", (ctx) => {
  return ctx.sendJson(learning);
});

app.get("/info", (ctx) => {
  return ctx.sendJson(info);
});

app.get("/skills", (ctx) => {
  return ctx.sendPrettyJson(skills);
});

app.listen({ port: port });
