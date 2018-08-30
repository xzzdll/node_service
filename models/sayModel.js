const mongoose = require('mongoose')
const Schema = mongoose.Schema

const saySchema = new Schema({
  date: { type: String, required: true },
  content: { type: String, required: true },
})

module.exports.say = mongoose.model('say', saySchema)