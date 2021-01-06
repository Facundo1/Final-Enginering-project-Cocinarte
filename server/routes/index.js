const express = require('express')
const recipe = require('./Recipe')
const user = require('./users')
const favorite = require('./favorite')
const pay = require('./Pays/Pays')

const router = express.Router()

router.use('/public/uploads', express.static('server/public/uploads'))

router.use('/api/users', user)
router.use('/api/recipes', recipe)
router.use('/api/favorite', favorite)
router.use('/api/checkout', pay)
module.exports = router
