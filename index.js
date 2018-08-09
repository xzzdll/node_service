const Koa = require('koa')
const router = require('./router/index')
const bodyParser = require('koa-bodyparser')
const cors = require('koa2-cors');
const session = require('koa-session');
const mongoose = require('mongoose');
const config = require('./config');


const app = new Koa()


app.jsonSpaces = 0

mongoose.connect(config.mongodb)
mongoose.connection.on('error', console.error)
mongoose.connection.on('open', () => {
  console.log("------" + config.mongodb + "数据库连接成功！------");

})

app.use(bodyParser())
app.use(cors());
//作用：启动路由
app.use(router.routes());
// 作用： 这是官方文档的推荐用法,我们可以看到router.allowedMethods()用在了路由匹配router.routes()之后,所以在当所有路由中间件最后调用.此时根据ctx.status设置response响应头
app.use(router.allowedMethods());
app.use(session(app))


app.listen(3000, () => {
  console.log('application is starting at port 3000')
})