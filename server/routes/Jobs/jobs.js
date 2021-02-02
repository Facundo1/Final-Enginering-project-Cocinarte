const express = require('express')
const router = express.Router()
const nodemailer = require('nodemailer')

//=================================
//             User
//=================================

router.post('/sendCurriculum', (req, res) => {
  const postulantName = req.body.name
  const postulantLastname = req.body.lastname
  const postulantAddress = req.body.address
  const postulantPhone = req.body.phone
  const postulantEmail = req.body.email
  const postulantStudies = req.body.studies
  const postulantExperience = req.body.experience
  const postulantObjetives = req.body.objetives
  const companyEmail = req.body.companyEmail

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    post: 587,
    secure: false,
    auth: {
      user: 'cocinarte.empleos@gmail.com',
      pass: 'Cocinarte123'
    }
  })
  const fieldheader = `<strong>Cocinarte recomienda un postulante para la oferta laboral:</strong> <br> <br> <strong>Nombre</strong> ${postulantName} <br> <strong>Apellido</strong>: ${postulantLastname} <br> <strong>Direccion</strong>: ${postulantAddress} <br>
  <strong>Telefono</strong>: ${postulantPhone} <br> <strong>Email</strong>: ${postulantEmail} <br> <strong>Estudios</strong>: ${postulantStudies} <br> <strong>Experiencia</strong>: ${postulantExperience} <br>
  <strong>Objetivos</strong>: ${postulantObjetives}<br> <br> 
  <strong>|Cocinarte empleos| es una consultora asociada a |Cocinarte|. Todos los derechos reservados 2021, Rosario,Santa Fe ,Argentina. </strong> `
  const mailOptions = {
    from: 'Remitente',
    to: companyEmail,
    subject: 'Referencia de busqueda laboral usuario de |Cocinarte|',
    text: `Referido de oferta laboral por |Cocinarte|`,
    html: fieldheader
  }
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) return res.json({ success: false, err })
    return res.status(200).json({
      success: true,
      msg: 'Email enviado correctamente'
    })
  })
})

module.exports = router
