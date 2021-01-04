import React, { useState } from 'react'
import axios from 'axios'

const ResetPassword = props => {
  const [password, setPassword] = useState('')

  const submitHandler = e => {
    e.preventDefault()
    const body = {
      password,
      id: props.match.params.id
    }
    axios.patch('http://localhost:5000/api/users/reset', body).then(() => {
      props.history.push('/login')
    })
  }

  return (
    <form onSubmit={submitHandler}>
      <input
        type='password'
        name='password'
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder='New Password'
      />

      <button>Save</button>
    </form>
  )
}

export default ResetPassword
