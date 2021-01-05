import React, { useState } from 'react'
import axios from 'axios'

const ResetPassword = props => {
  const [password, setPassword] = useState('')

  const submitHandler = e => {
    e.preventDefault()
    const body = {
      password
    }
    axios.post('http://localhost:5000/api/users/reset2', body).then(() => {
      props.history.push('/')
    })
  }

  return (
    <form onSubmit={submitHandler}>
      <h3 className='text-center'>Ingrese su nueva contraseña</h3>
      <div className='d-flex justify-content-center mt-4'>
        <input
          className='text-center w-25 form-control form-control-sm'
          type='password'
          name='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder='New Password'
        />
      </div>

      <div className='d-flex justify-content-center'>
        <button className='mt-3 btn btn-info'>Save</button>
      </div>
    </form>
  )
}

export default ResetPassword
