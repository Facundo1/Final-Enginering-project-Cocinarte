const mongoose = require('mongoose')
const Schema = mongoose.Schema

const JobsSchema = new Schema({
  photo: {
    type: String,
    required: true
  },
  companyName: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  requirements: {
    type: String,
    required: true
  },
  contactMail: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  approximateSalary: {
    type: Number,
    required: true
  }
})

const Jobs = mongoose.model('jobs', JobsSchema)

module.exports = Jobs
