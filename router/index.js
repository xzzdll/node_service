const router = require('koa-router')();
import { login } from '../controllers/user.js'

router.post('/login', login.login)

router.post('/news', (ctx, next) => {
  const { email } = ctx.request.body;
  ctx.body = { "test": email + '111' }
});