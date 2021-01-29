import React, { useState } from 'react'
import axios from 'axios'
import * as Yup from 'yup'

const JobPostulate = () => {
  const [filename, setFileName] = useState('')
  const [path, setPath] = useState('')
  const [name, setName] = useState('')
  const [lastname, setLastNaame] = useState('')
  const [emailSent, setEmailSent] = useState(false)
  const [existingMail, setExistingMail] = useState(false)

  const submitHandler = e => {
    e.preventDefault()

    const body = {
      name,
      lastname,
      filename,
      path
    }

    axios.post('http://localhost:5000/api/jobs/sendMail', body).then(res => {
      if (res.loginSuccess !== false) {
        console.log('Email enviado hacia la casilla de correo', body.filename)
        setEmailSent(true)
      } else {
        alert('EMAIL NO COINCIDE CON LA BASE DE DATOS')
      }
    })
  }

  let body

  if (emailSent) {
    body = (
      <div className='mt-5'>
        <h5 className='d-flex justify-content-center'>
          Usted se ha postulado, la empresa se contactará con usted a la
          brevedad.
        </h5>
      </div>
    )
  } else {
    body = (
      <form className='formSendMail mt-5' onSubmit={submitHandler}>
        <h3 className='text-center'>
          Complete el formulario para postularse como candidato
        </h3>
        <div className='d-flex flex-column justify-content-center align-items-center mt-4'>
          <input
            className='text-center w-25 form-control form-control-sm'
            name='name'
            placeholder='Nombre Completo'
            type='text'
            size='30'
            required
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            className='text-center w-25 form-control form-control-sm'
            name='Lastname'
            placeholder='Apellido'
            type='text'
            size='30'
            required
            value={lastname}
            onChange={e => setLastNaame(e.target.value)}
          />
          <br></br>
          <p>Subir curriculum vitae</p>
          <input
            className='text-center w-25 form-control form-control-sm'
            type='file'
            name='upload'
            accept='application/pdf'
            value={filename}
            onChange={e => setFileName(e.target.value)}
          />
        </div>
        <div className='d-flex justify-content-center'>
          <button className='mt-3 btn btn-info'>Enviar mis datos</button>
        </div>
      </form>
    )
  }
  return body
}

export default JobPostulate
