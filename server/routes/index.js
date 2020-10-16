const express = require('express')
const recipe = require('./Recipe')

const router = express.Router()

router.use('/recipes', recipe)

module.exports = router
