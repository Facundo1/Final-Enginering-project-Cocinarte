const mongoose = require('mongoose')

const cashPaysSchema = mongoose.Schema(
  {
    userEmail: {
      type: String
    },
    userName: {
      type: String
    },
    UserLastName: {
      type: String
    },
    mountOfPay: {
      type: Number
    },
    date: {
      type: String
    }
  },
  { timestamps: true }
)

const CashPay = mongoose.model('CashPay', cashPaysSchema)

module.exports = { CashPay }
