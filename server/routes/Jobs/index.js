const express = require('express')
const controller = require('./Controller')

const router = express.Router()
const { getAll, getById, insert, remove } = controller

router.use(express.json())

router.get('/', getAll)
router.get('/:id', getById)
router.post('/', insert)
router.delete('/:id', remove)

module.exports = router
