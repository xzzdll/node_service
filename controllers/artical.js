const artical = require("../models/articalModel.js");

exports.delete = async function(ctx) {
  if (ctx.session.user === undefined) {
    ctx.body = { message: "未登录", status: "false" };
    return;
  }
  const { id } = ctx.request.body;
  const state = await artical.artical.remove({ _id: id });
  if (state.ok === 1 && state.n !== 0) {
    ctx.body = { message: "删除成功", status: "true" };
  } else {
    ctx.body = { message: "删除失败", status: "false" };
  }
};

exports.edit = async function(ctx) {
  if (ctx.session.user === undefined) {
    ctx.body = { message: "未登录", status: "false" };
    return;
  }
  const { id, content, title, type, date, times } = ctx.request.body;
  const state = await artical.artical.update(
    { _id: id },
    {
      content: content,
      title: title,
      type: type,
      date: date,
      times: times
    }
  );
  if (state.ok === 1 && state.n !== 0) {
    ctx.body = { message: "更新成功", status: "true" };
  } else {
    ctx.body = { message: "更新失败", status: "false" };
  }
};

exports.create = async function(ctx) {
  if (ctx.session.user === undefined) {
    ctx.body = { message: "未登录", status: "false" };
    return;
  }
  const { content, title, type, date, times } = ctx.request.body;
  const newArtical = await artical.artical.create({
    content: content,
    title: title,
    type: type,
    date: date,
    times: times
  });
  if (newArtical._id) {
    ctx.body = { message: "新增成功", status: "true" };
  } else {
    ctx.body = { message: "新增失败", status: "false" };
  }
};

exports.list = async function(ctx) {
  let articals;
  const { id } = ctx.request.body;
  if (id) {
    articals = await artical.artical.find({ _id: id });
  } else {
    articals = await artical.artical.find({});
  }
  if (articals.length !== 0) {
    ctx.body = { message: "查询成功", status: "true", list: articals };
  } else {
    ctx.body = { message: "查询失败", status: "false" };
  }
};
