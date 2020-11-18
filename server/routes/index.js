const express = require('express')
const recipe = require('./Recipe')
const user = require('./users')

const router = express.Router()

router.use('/public/uploads', express.static('server/public/uploads'))

router.use('/api/users', user)
router.use('/api/recipes', recipe)

module.exports = router
