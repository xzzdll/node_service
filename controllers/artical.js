const artical = require('../models/articalModel.js');

exports.delete = async function (ctx) {
  const { id } = ctx.request.body
  const state = await artical.artical.remove({ "_id": id })
  if (state.ok === 1 && state.n !== 0) {
    ctx.body = { "message": "删除成功", "status": "true" }
  } else {
    ctx.body = { "message": "删除失败", "status": "false" }
  }
}

exports.edit = async function (ctx) {
  const { id, content, title } = ctx.request.body
  const state = await artical.artical.update({ "_id": id }, { "content": content, "title": title })
  if (state.ok === 1 && state.n !== 0) {
    ctx.body = { "message": "更新成功", "status": "true" }
  } else {
    ctx.body = { "message": "更新失败", "status": "false" }
  }
}

exports.create = async function (ctx) {
  const { content, title } = ctx.request.body
  const newArtical = await artical.artical.create({ "content": content, "title": title })
  if (newArtical._id) {
    ctx.body = { "message": "新增成功", "status": "true" }
  } else {
    ctx.body = { "message": "新增失败", "status": "false" }
  }
}

exports.list = async function (ctx) {
  const articals = await artical.artical.find({ })
  if (articals.length !== 0) {
    ctx.body = { "message": "查询成功", "status": "true" }
  } else {
    ctx.body = { "message": "查询失败", "status": "false" }
  }
}


