import React, { useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'

const Rewards = () => {
  const user = useSelector(state => state.user)

  let body

  if (user.userData && user.userData.accountType === 'Cuenta gratuita') {
    body = (
      <div classname='mt-5'>
        <h3 className='text-center mt-5 text-danger font-weight-bold'>
          Hazte premium para acceder a todos los beneficios de |Cocinarte|
        </h3>
      </div>
    )
  } else {
    body = (
      <div className='formSendMail mt-5'>
        <h3 className='text-center'>
          Bienvenido al sistema de beneficios exclusivos en locales de
          gastronomia<br></br>
          |Cocinarte| trabaja con el Partner www.arte-culinario.com para que
          puedas disfrutar de ofertas<br></br>
          descuentos increibles y mucho mas alrededor de toda la Republica
          Argentina
        </h3>
      </div>
    )
  }
  return body
}

export default Rewards
