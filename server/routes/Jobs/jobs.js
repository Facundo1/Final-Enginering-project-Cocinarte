const express = require('express')
const router = express.Router()
const nodemailer = require('nodemailer')

//=================================
//             User
//=================================

router.post('/sendCurriculum', (req, res) => {
  const postulantName = req.body.name
  const postulantLastname = req.body.lastname
  const companyEmail = req.body.email
  const CVfileName = req.body.fileName
  const CVfilePath = req.body.filePath

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    post: 587,
    secure: false,
    auth: {
      user: 'cocinarte.empleos@gmail.com',
      pass: 'Cocinarte123'
    }
  })
  const mailOptions = {
    from: 'Remitente',
    to: companyEmail,
    subject: 'Busqueda laboral usuario de |Cocinarte|',
    text: `El usuario  ${(postulantName,
    ' ',
    postulantLastname)} se ha postulado como candidato para la oferta laboral./n su CV: /n `,
    attachments: [
      {
        fileName: CVfileName,
        path: CVfilePath
      }
    ]
  }
  transporter.sendMail(mailOptions, (error, info) => {
    console.log('Email enviado')
  })
})

module.exports = router
