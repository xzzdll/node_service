const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  username: { type: String },
  password: { type: String, required: true },
})

module.exports.account = mongoose.model('user', userSchema)