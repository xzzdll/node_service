const user = require('../models/user.js');

exports.login = async function (ctx) {
  const { userName, passWord } = ctx.request.body
  const hasUser = await user.user.findOne({ "username": userName, "password": passWord })
  if (hasUser) {
    ctx.body = { "message": "登陆成功" }
  } else {
    ctx.body = { "message": "用户名或密码不对" }
  }
}


