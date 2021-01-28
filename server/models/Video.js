const mongoose = require('mongoose')
const Schema = mongoose.Schema

const videoSchema = new Schema(
  {
    title: {
      type: String,
      maxlength: 150
    },
    description: {
      type: String
    },
    privacy: {
      type: Number
    },
    filePath: {
      type: String
    },
    catogory: String,
    views: {
      type: Number,
      default: 0
    },
    duration: {
      type: Number
    },
    thumbnail: {
      type: String
    }
  },
  { timestamps: true }
)

const Video = mongoose.model('Video', videoSchema)

module.exports = Video
