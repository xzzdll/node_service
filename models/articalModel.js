const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articalSchema = new Schema({
  title: { type: String },
  content: { type: String },
  date: { type: String },
  times: { type: Number },
  type: { type: String }
});

module.exports.artical = mongoose.model("artical", articalSchema);
