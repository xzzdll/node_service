const User = require('../models/user.js');

exports.login = async function (ctx) {
  const { userName, passWord } = ctx.request.body
  console.log({ username: userName, password: passWord });
  const hasUser = await User.User.findOne({ "username": userName, "password": passWord })
  console.log(hasUser);
  if (hasUser) {
    ctx.body = { "message": "登陆成功" }
  } else {
    ctx.body = { "message": "用户名或密码不对" }
  }
}


