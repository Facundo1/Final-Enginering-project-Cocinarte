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

/////////////////////// Strategy pattern to calculate Net income ///////////////////
function lowTaxes() {
  const discount = 10
  return discount
}
function mediumTaxes() {
  const discount = 15
  return discount
}
function highTaxes() {
  const discount = 20
  return discount
}

router.post('/jobCalculateSalary', (req, res) => {
  const jobSalary = req.body.netSalary
  let total = 0
  console.log('Salario que llega desde el front :', jobSalary)

  if (jobSalary <= 35000) {
    const discount = lowTaxes()
    total = jobSalary - (jobSalary * discount) / 100
  }
  if (jobSalary > 35000 && jobSalary <= 50000) {
    const discount = mediumTaxes()
    total = jobSalary - (jobSalary * discount) / 100
  }
  if (jobSalary > 50000) {
    const discount = highTaxes()
    total = jobSalary - (jobSalary * discount) / 100
  }
  console.log(total)

  return res.status(200).json({
    success: true,
    msg: 'Impuestos calculados',
    data: total
  })
})

module.exports = router
