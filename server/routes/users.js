const express = require('express')
const router = express.Router()
const { User } = require('../models/User')
const { auth } = require('../middleware/auth')
const {
  createUser,
  getUser,
  updateUser
} = require('../middleware/ResetPasswordFunctions')
const {
  getResetRequest,
  createResetRequest
} = require('../middleware/ResetPasswordFunctions')
const sendResetLink = require('../middleware/SendMails')
const bcrypt = require('bcrypt')
const uuidv1 = require('uuidv1')
const nodemailer = require('nodemailer')
//=================================
//             User
//=================================

router.get('/auth', auth, (req, res) => {
  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    lastname: req.user.lastname,
    accountType: req.user.accountType,
    role: req.user.role,
    image: req.user.image
  })
})

router.post('/register', (req, res) => {
  const user = new User(req.body)

  user.save((err, doc) => {
    if (err) return res.json({ success: false, err })
    return res.status(200).json({
      success: true
    })
  })
})

router.post('/login', (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user)
      return res.json({
        loginSuccess: false,
        message: 'Auth failed, email not found'
      })

    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch)
        return res.json({ loginSuccess: false, message: 'Wrong password' })

      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err)
        res.cookie('w_authExp', user.tokenExp)
        res
          .cookie('w_auth', user.token)
          .status(200)
          .json({
            loginSuccess: true,
            userId: user._id
          })
      })
    })
  })
})

router.get('/logout', auth, (req, res) => {
  User.findOneAndUpdate(
    { _id: req.user._id },
    { token: '', tokenExp: '' },
    (err, doc) => {
      if (err) return res.json({ success: false, err })
      return res.status(200).send({
        success: true
      })
    }
  )
})

router.post('/forgot', (req, res) => {
  const thisUser = req.body.email
  console.log('Email que llega:', thisUser)
  if (thisUser) {
    const id = uuidv1()
    const request = {
      id,
      email: thisUser
    }
    console.log('Despues del if:', request)
    createResetRequest(request)
    sendResetLink(thisUser, id)
  }
  res.status(200).json()
})

router.patch('/reset', (req, res) => {
  const thisRequest = req.body.id
  if (thisRequest) {
    const user = getUser(thisRequest.email)
    bcrypt.hash(req.body.password, 10).then(hashed => {
      user.password = hashed
      updateUser(user)
      res.status(204).json()
    })
  } else {
    res.status(404).json()
  }
})

router.post('/nodeMailerTest', (req, res) => {
  const thisUser = req.body.email
  console.log('Email que llega:', thisUser)
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    post: 587,
    secure: false,
    auth: {
      user: 'soporte.cocinarte@gmail.com',
      pass: 'Pingoso123'
    }
  })
  const mailOptions = {
    from: 'Remitente',
    to: thisUser,
    subject: 'Recuperacion de contraseña |Cocinarte|',
    text:
      'To reset your password, please click on this link: http://localhost:3000/reset'
  }
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(500).send(error.message)
    } else {
      console.log('Email enviado')
      res.status(200).jsonp(req.body)
    }
  })
})

router.post('/mailValidation', (req, res) => {
  const thisUser = req.body.email
  User.findOne({ email: thisUser }, (err, user) => {
    if (!user)
      return res.json({
        loginSuccess: false,
        message: 'Mail cannot found'
      })
  })
})

module.exports = router
