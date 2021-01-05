import React, { useState } from 'react'
import axios from 'axios'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const [emailSent, setEmailSent] = useState(false)
  const [existingMail, setExistingMail] = useState(false)

  const submitHandler = e => {
    e.preventDefault()
    const body = {
      email
    }

    axios
      .post('http://localhost:5000/api/users/nodeMailerTest', body)
      .then(res => {
        if (res.loginSuccess !== false) {
          console.log(
            'Email enviado hacia la casilla de correo',
            res.loginSuccess
          )
        } else {
          alert('ERROR DE EMAIL')
        }
        setEmailSent(true)
      })
  }

  let body
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
            type='text'
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
