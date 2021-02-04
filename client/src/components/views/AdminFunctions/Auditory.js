import React, { useState, useEffect } from 'react'
import { Card, Avatar, Col, Typography, Row } from 'antd'
import axios from 'axios'

function Auditory() {
  const [Data, setData] = useState([])

  useEffect(() => {
    peticionGet()
  }, [])

  const peticionGet = async () => {
    await axios
      .get('http://localhost:5000/api/admin/getUsersAuditory')
      .then(response => {
        console.log(response.data.data)
        setData(response.data.data)
      })
      .catch(error => {
        console.log(error)
      })
  }

  console.log('data fuera del axios', Data)

  const renderCards = Data.map((user, index) => {
    return (
      <tr key={index}>
        <td className='text-center'>{user.user_id}</td>
        <td>
          <div className='d-flex justify-content-center'>{user.username}</div>
        </td>
        <td>
          <div className='d-flex justify-content-center'>{user.loginDate}</div>
        </td>
        <td>
          <div className='d-flex justify-content-center'>{user.logoutDate}</div>
        </td>
      </tr>
    )
  })

  return (
    <div>
      <div>
        <h1>|Auditoria de pagos|</h1>
        <a href='https://dashboard.stripe.com/test/dashboard' target='_blank'>
          <button className='btn btn-info  text-white rounded h5'>
            Ver...
          </button>
        </a>
        <table className='ml-5'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Usuario</th>
              <th>Fecha login</th>
              <th>Fecha logout</th>
            </tr>
          </thead>
          <tbody>{renderCards}</tbody>
        </table>
      </div>
    </div>
  )
}
export default Auditory
