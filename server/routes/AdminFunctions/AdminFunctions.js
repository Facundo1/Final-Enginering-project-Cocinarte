const express = require('express')

const router = express.Router()
const Recipe = require('../../models/Recipe')
const Video = require('../../models/Video')

router.post('/addVideo', (req, res) => {
  const video = new Video(req.body)

  video.save((err, doc) => {
    if (err) return res.json({ success: false, err })
    return res.status(200).json({
      success: true
    })
  })
})

router.post('/addRecipe', (req, res) => {
  const recipe = new Recipe(req.body)

  recipe.save((err, doc) => {
    if (err) return res.json({ success: false, err })
    return res.status(200).json({
      success: true
    })
  })
})

module.exports = router
