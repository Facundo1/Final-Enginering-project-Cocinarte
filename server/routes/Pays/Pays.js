const express = require('express')
const router = express.Router()
const stripe = require('stripe')(
  'sk_test_51I3ODJGL81eAF97DuwRqcbI9rYeHPIMZTOUSRPuMk1SebXLkPuLO9jInNhscXUBnGP5cLJXPUv7wNGt2NknnlsvM00NCZJXrzv'
)
const uuid = require('uuid').v4
const { User } = require('../../models/User')
const { CashPay } = require('../../models/CashPays')

router.post('/cardPay', async (req, res) => {
  console.log('Request:', req.body)

  let error
  let status
  try {
    const { product, token } = req.body

    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id
    })

    const idempotency_key = uuid()
    const charge = await stripe.charges.create(
      {
        amount: product.price * 100,
        currency: 'usd',
        customer: customer.id,
        receipt_email: token.email,
        description: `Acabas de adquirir ${product.name}`
      },
      {
        idempotency_key
      }
    )
    console.log('Charge:', { charge })
    status = 'success'
  } catch (error) {
    console.error('Error:', error)
    status = 'failure'
  }

  res.json({ error, status })
})

router.post('/changeAccount', (req, res) => {
  const thisUser = req.body.user.userData
  User.findOne({ _id: thisUser._id }, (err, user) => {
    console.log(thisUser)
    if (!user)
      return res.status(500).send({
        loginSuccess: false,
        message: err.message
      })
    else {
      User.update(err => {
        user.accountType = 'Cuenta Premium'
        console.log(thisUser.accountType)
        user.save((err, doc) => {
          if (err) return res.json({ success: false, err })
          return res.status(200).json({
            success: true,
            msg: 'Mongo Modificado',
            data: user
          })
        })
      })
    }
  })
})

router.post('/addCashPays', (req, res) => {
  const cashPay = new CashPay({
    userEmail: req.body.userEmail,
    userName: req.body.userName,
    UserLastName: req.body.UserLastName,
    mountOfPay: req.body.mountOfPay,
    date: req.body.date
  })

  cashPay.save((err, doc) => {
    if (err) return res.json({ success: false, err })
    return res.status(200).json({ success: true })
  })
})

module.exports = router
