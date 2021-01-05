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
      <span>
        Se enviara un email a la casilla de tu correo para restablecer la
        contraseña.
      </span>
    )
  } else {
    body = (
      <form onSubmit={submitHandler}>
        <input
          name='email'
          placeholder='email'
          type='text'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <button>Enviar email</button>
      </form>
    )
  }

  return body
}

export default ForgotPassword
