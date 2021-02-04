import React, { useState, useEffect } from 'react'

import DataTable from 'react-data-table-component'
import axios from 'axios'

function Auditory() {
  const [data, setData] = useState([])

  const peticionGet = async () => {
    await axios
      .get('http://localhost:5000/api/admin/getUsersAuditory')
      .then(response => {
        setData(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }

  console.log('data fuera del axios', data)
  const columns = [{ name: 'ID', data: data.user_id }]

  useEffect(() => {
    peticionGet()
  }, [])
  return (
    <div>
      <div>
        <h1>|Auditoria de pagos|</h1>
        <a href='https://dashboard.stripe.com/test/dashboard' target='_blank'>
          <button className='btn btn-info  text-white rounded h5'>
            Ver...
          </button>
        </a>
        <DataTable
          columns={columns}
          data={data.user_id}
          title='Auditoria de usuarios'
        />
      </div>
    </div>
  )
}
export default Auditory
