const mongoose = require('mongoose')
const Schema = mongoose.Schema

const loginAuditorySchema = new Schema({
  user_id: {
    type: String
  },
  username: {
    type: String
  },
  loginDate: {
    type: String
  },
  logoutDate: {
    type: String
  }
})

const LoginAuditory = mongoose.model('LoginAuditory', loginAuditorySchema)

module.exports = LoginAuditory
