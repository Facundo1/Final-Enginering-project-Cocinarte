const express = require('express')
const recipe = require('./Recipe')
const user = require('./Users/users')
const favorite = require('./Recipe/favorite')
const pay = require('./Pays/Pays')
const comment = require('./VideoCurses/comment')
const like = require('./VideoCurses/like')
const video = require('./VideoCurses/video')

const router = express.Router()

router.use('/public/uploads', express.static('server/public/uploads'))
router.use('/uploads', express.static('server/uploads'))

router.use('/api/users', user)
router.use('/api/recipes', recipe)
router.use('/api/favorite', favorite)
router.use('/api/checkout', pay)
router.use('/api/comment', comment)
router.use('/api/like', like)
router.use('/api/video', video)
module.exports = router
