const express = require('express')
const router = express.Router()
const stripe = require('stripe')(
  'sk_test_51I3ODJGL81eAF97DuwRqcbI9rYeHPIMZTOUSRPuMk1SebXLkPuLO9jInNhscXUBnGP5cLJXPUv7wNGt2NknnlsvM00NCZJXrzv'
)
const uuid = require('uuid').v4

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

module.exports = router
