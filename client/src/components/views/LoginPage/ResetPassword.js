import React, { useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import * as Yup from 'yup'
const ResetPassword = props => {
  const [password, setPassword] = useState('')
  const user = useSelector(state => state.user)
  const userChanger = user.userData && user.userData._id
  const submitHandler = e => {
    e.preventDefault()
    const body = {
      password,
      user
    }
    axios.post('http://localhost:5000/api/users/reset', body).then(() => {
      props.history.push('/')
    })
  }

  return (
    <form onSubmit={submitHandler}>
      <h3 className='text-center mt-5'>Ingrese su nueva contraseña</h3>
      <div className='d-flex justify-content-center mt-4'>
        <input
          className='text-center w-25 form-control form-control-sm'
          type='password'
          required
          pattern='(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])\S{6,}'
          name='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder='Nueva contraseña'
        />
      </div>

      <div className='d-flex justify-content-center'>
        <button className='mt-3 btn btn-info'>Guardar</button>
      </div>
      <h6 className='text-center mt-5 text-danger'>
        <p className='text-center mt-5 text-info'>[Formato]</p> La contraseña
        debe tener al menos 1 letra mayuscula, 1 numero y minimo 6 caracteres.
      </h6>
    </form>
  )
}

export default ResetPassword
