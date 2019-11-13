const fs = require("fs");
const path = require("path");

let config = {
  wechat: {
    appID: "wxe0d8ad6a6bf9a3bb",
    appsecret: "1fb18b92f2e6bb446871c8a44d0a000d",
    token: "john"
  }
};

exports.image = async function(ctx) {
  // console.log(file)
  const file = ctx.request.files.file;

  const reader = fs.createReadStream(file.path);
  let filePath = path.join(__dirname, '../upload/') + `/${file.name}`;
  // 创建可写流
  const upStream = fs.createWriteStream(filePath);
  // 可读流通过管道写入可写流
  reader.pipe(upStream);

  if (file) {
    ctx.body = {
      message: "上传成功", status: "true", url: `${ctx.origin}/upload/${file.name}` };
  } else {
    ctx.body = { message: "上传失败", status: "false" };
  }
};
