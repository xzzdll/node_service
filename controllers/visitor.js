const visitor = require("../models/visitorModel.js");

exports.add = async function(ctx) {
  const { ip, city } = ctx.request.body;
  const hasUser = await visitor.visitor.findOne({ ip: ip, city: city });
  if (hasUser) {
    ctx.body = { message: "已访问过用户", status: "true" };
  } else {
    await visitor.visitor.create({ ip: ip, city: city });
    ctx.body = { message: "新用户", status: "true" };
  }
};

exports.count = async function(ctx) {
  let amount = 0;
  await visitor.visitor.countDocuments({}, (err, count) => {
    amount = count;
  });
  if (amount) {
    ctx.body = { message: "查询成功", status: "true", count: amount };
  } else {
    ctx.body = { message: "无数据", status: "true", count: amount };
  }
};

// exports.delete = async function (ctx) {
//   if (ctx.session.user === undefined) {
//     ctx.body = { "message": "未登录", "status": "false" }
//     return;
//   }
//   const { id } = ctx.request.body
//   const state = await user.account.remove({ "_id": id })
//   if (state.ok === 1 && state.n !== 0) {
//     ctx.body = { "message": "删除成功", "status": "true" }
//   } else {
//     ctx.body = { "message": "删除失败", "status": "false" }
//   }
// }

// exports.create = async function (ctx) {
//   if (ctx.session.user === undefined) {
//     ctx.body = { "message": "未登录", "status": "false" }
//     return;
//   }
//   const { userName, passWord } = ctx.request.body
//   const newSay = await user.account.create({ "username": userName, "password": passWord })
//   if (newSay._id) {
//     ctx.body = { "message": "新增成功", "status": "true" }
//   } else {
//     ctx.body = { "message": "新增失败", "status": "false" }
//   }
// }

// exports.list = async function (ctx) {
//   if (ctx.session.user === undefined) {
//     ctx.body = { "message": "未登录", "status": "false" }
//     return;
//   }
//   let says
//   const { id } = ctx.request.body
//   if (id) {
//     says = await user.account.find({ "_id": id })
//   }
//   else {
//     says = await user.account.find({})
//   }
//   if (says.length !== 0) {
//     ctx.body = { "message": "查询成功", "status": "true", "list": says }
//   } else {
//     ctx.body = { "message": "查询失败", "status": "false" }
//   }
// }
