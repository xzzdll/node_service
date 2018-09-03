const user = require('../models/userModel.js');

exports.login = async function (ctx) {
  const { userName, passWord } = ctx.request.body
  const hasUser = await user.account.findOne({ "username": userName, "password": passWord })
  if (hasUser) {
    ctx.session.user = userName;
    ctx.body = { "message": "登陆成功", "status": "true" }
  } else {
    ctx.body = { "message": "用户名或密码不对", "status": "false" }
  }
}

exports.delete = async function (ctx) {
  if (ctx.session.user === undefined) {
    ctx.body = { "message": "未登录", "status": "false" }
    return;
  }
  const { id } = ctx.request.body
  const state = await user.account.remove({ "_id": id })
  if (state.ok === 1 && state.n !== 0) {
    ctx.body = { "message": "删除成功", "status": "true" }
  } else {
    ctx.body = { "message": "删除失败", "status": "false" }
  }
}

exports.create = async function (ctx) {
  if (ctx.session.user === undefined) {
    ctx.body = { "message": "未登录", "status": "false" }
    return;
  }
  const { userName, passWord } = ctx.request.body
  const newSay = await user.account.create({ "username": userName, "password": passWord })
  if (newSay._id) {
    ctx.body = { "message": "新增成功", "status": "true" }
  } else {
    ctx.body = { "message": "新增失败", "status": "false" }
  }
}

exports.list = async function (ctx) {
  if (ctx.session.user === undefined) {
    ctx.body = { "message": "未登录", "status": "false" }
    return;
  }
  let says
  const { id } = ctx.request.body
  if (id) {
    says = await user.account.find({ "_id": id })
  }
  else {
    says = await user.account.find({})
  }
  if (says.length !== 0) {
    ctx.body = { "message": "查询成功", "status": "true", "list": says }
  } else {
    ctx.body = { "message": "查询失败", "status": "false" }
  }
}


