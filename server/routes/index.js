const express = require('express')
const recipe = require('./Recipe')

const router = express.Router()

router.use('/public/uploads', express.static('../public/uploads'))
router.use('/recipes', recipe)

module.exports = router
