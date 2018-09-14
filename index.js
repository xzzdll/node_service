const Koa = require("koa");
const router = require("./router/index");
const bodyParser = require("koa-bodyparser");
const cors = require("koa2-cors");
const session = require("koa-session");
const mongoose = require("mongoose");
const config = require("./config");
const convert = require("koa-convert");
const compress = require("koa-compress");

const app = new Koa();

app.keys = ["some secret hurr"];

app.jsonSpaces = 0;

mongoose.connect(
  config.mongodb,
  { useNewUrlParser: true }
);
mongoose.connection.on("error", console.error);
mongoose.connection.on("open", () => {
  console.log("------" + config.mongodb + "数据库连接成功！------");
});

const CONFIG = {
  key: "koa:sess",
  maxAge: 86400000,
  overwrite: true,
  httpOnly: false,
  signed: true,
  rolling: false,
  renew: false
};

app.use(
  convert.compose(
    cors({
      credentials: true
    }),
    bodyParser({ jsonLimit: "50mb", formLimit: "50mb" }),
    session(CONFIG, app),
    router.routes(),
    router.allowedMethods(),
    compress({ threshold: 2048 })
  )
);

app.listen(3000, () => {
  console.log("application is starting at port 3000");
});
