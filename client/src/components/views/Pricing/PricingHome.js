import React from 'react'
import ReactDOM from 'react-dom'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'
import { toast } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'
import './stylePrice.css'

toast.configure()

function PricingHome() {
  const [product] = React.useState({
    name: '|Cocinarte Premium|',
    price: 14,
    description: 'LLeva la pasion por la cocina, a otro nivel.'
  })

  async function handleToken(token, addresses) {
    const response = await axios.post(
      'http://localhost:5000/api/checkout/cardPay',
      { token, product }
    )
    const { status } = response.data
    console.log('Response:', response.data)
    if (status === 'success') {
      toast('Success! Check email for details', { type: 'success' })
    } else {
      toast('Something went wrong', { type: 'error' })
    }
  }

  return (
    <div className='container'>
      <div className='product'>
        <h1>{product.name}</h1>
        <h3>Oferta exclusiva · ${product.price}</h3>
      </div>
      <StripeCheckout
        stripeKey='pk_test_51I3ODJGL81eAF97DdCWXll6O0t5gJWkgaVCVhNStDn7B2qGRSVuYDsE4eJ45rHKGQCoFMxLHClXYHG3aPpGQfkRr00selbXucj'
        token={handleToken}
        amount={product.price * 100}
        name='|Cocinarte Premium|'
        billingAddress
      />
    </div>
  )
}

export default PricingHome
