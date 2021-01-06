import React, { useState } from 'react'
import axios from 'axios'
import * as Yup from 'yup'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const [emailSent, setEmailSent] = useState(false)
  const [existingMail, setExistingMail] = useState(false)

  const submitHandler = e => {
    e.preventDefault()

    const body = {
      email
    }

    axios.post('http://localhost:5000/api/users/sendMail', body).then(res => {
      if (res.loginSuccess !== false) {
        console.log('Email enviado hacia la casilla de correo')
        setEmailSent(true)
      } else {
        alert('EMAIL NO COINCIDE CON LA BASE DE DATOS')
      }
    })
  }

  let body
  const emailPattern = {
    Remail: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  }
  if (emailSent) {
    body = (
      <div className='mt-5'>
        <h5 className='d-flex justify-content-center'>
          Se enviara un email a la casilla de tu correo para restablecer la
          contraseña.
        </h5>
      </div>
    )
  } else {
    body = (
      <form className='formSendMail mt-5' onSubmit={submitHandler}>
        <h3 className='text-center'>
          Ingrese su correo electronico para recuperar su contraseña
        </h3>
        <div className='d-flex justify-content-center mt-4'>
          <input
            className='text-center w-25 form-control form-control-sm'
            name='email'
            placeholder='Email'
            type='email'
            pattern={emailPattern.Remail}
            size='30'
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className='d-flex justify-content-center'>
          <button className='mt-3 btn btn-info'>Enviar email</button>
        </div>
      </form>
    )
  }
  return body
}

export default ForgotPassword
