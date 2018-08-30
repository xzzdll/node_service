const say = require('../models/sayModel.js');

exports.delete = async function (ctx) {
  if (ctx.session.user === undefined) {
    ctx.body = { "message": "未登录", "status": "false" }
    return;
  }
  const { id } = ctx.request.body
  const state = await say.say.remove({ "_id": id })
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
  const { content, title } = ctx.request.body
  const newSay = await say.say.create({ "content": content, "title": title })
  if (newSay._id) {
    ctx.body = { "message": "新增成功", "status": "true" }
  } else {
    ctx.body = { "message": "新增失败", "status": "false" }
  }
}

exports.list = async function (ctx) {
  let says
  const { id } = ctx.request.body
  if (id) {
    says = await say.say.find({ "_id": id })
  }
  else {
    says = await say.say.find({})
  }
  if (says.length !== 0) {
    ctx.body = { "message": "查询成功", "status": "true", "list": says }
  } else {
    ctx.body = { "message": "查询失败", "status": "false" }
  }
}


