const router = require('koa-router')();
const login = require('../controllers/user.js')

router.post('/login', login.login)

router.post('/news', (ctx, next) => {
  const { email } = ctx.request.body;
  ctx.body = { "test": email + '111' }
});

module.exports = router