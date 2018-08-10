const mongoose = require('mongoose')
const Schema = mongoose.Schema

const articalSchema = new Schema({
  title: { type: String },
  content: { type: String, required: true },
})

module.exports.artical = mongoose.model('artical', articalSchema)