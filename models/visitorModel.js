const mongoose = require('mongoose')
const Schema = mongoose.Schema

const visitorSchema = new Schema({
  ip: { type: String },
  city: { type: String },
})

module.exports.visitor = mongoose.model('visitor', visitorSchema)