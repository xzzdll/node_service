const Koa = require('koa')
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser')
const app = new Koa()
const cors = require('koa2-cors');

router.get('/', function (ctx, next) {
  ctx.body = "Hello koa";
})
router.post('/news', (ctx, next) => {
  const { email } = ctx.request.body;
  ctx.body = {"test":email}
});

app.use(bodyParser())
app.use(cors());
//作用：启动路由
app.use(router.routes());
// 作用： 这是官方文档的推荐用法,我们可以看到router.allowedMethods()用在了路由匹配router.routes()之后,所以在当所有路由中间件最后调用.此时根据ctx.status设置response响应头
app.use(router.allowedMethods());


app.listen(3000, () => {
  console.log('[demo] start-quick is starting at port 3000')
})