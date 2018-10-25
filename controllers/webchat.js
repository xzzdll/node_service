const sha1 = require("node-sha1");

let config = {
  wechat: {
    appID: "wxe0d8ad6a6bf9a3bb",
    appsecret: "1fb18b92f2e6bb446871c8a44d0a000d",
    token: "john"
  }
};

exports.check = async function(ctx) {
  const { signature, timestamp, echostr, nonce } = ctx.request.body;
  console.log(signature, timestamp, echostr, nonce)
  let token = config.wechat.token;
  let str = [token, timestamp, nonce].sort().join("");
  let sha = sha1(str);

  if (sha === signature) {
    ctx.body = echostr + "";
  } else {
    ctx.body = "wrong";
  }
};
