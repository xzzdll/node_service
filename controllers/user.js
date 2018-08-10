const user = require('../models/userModel.js');

exports.login = async function (ctx) {
  const { userName, passWord } = ctx.request.body
  const hasUser = await user.account.findOne({ "username": userName, "password": passWord })
  if (hasUser) {
    ctx.session.user = {
      "username": userName
    }
    ctx.body = { "message": "登陆成功", "status": "true" }
  } else {
    ctx.body = { "message": "用户名或密码不对", "status": "false" }
  }
}


