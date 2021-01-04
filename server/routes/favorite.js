const express = require('express')
const router = express.Router()
const { Favorite } = require('../models/Favorite')
const { auth } = require('../middleware/auth')
const { getFind } = require('./fecadeFavorite')

//=================================
//             Favorite
//=================================
// the fecade (getFind) in method level , using differents parameters to define the type of action that's need to do
router.post('/favoriteNumber', auth, (req, res) => {
  return getFind('/favoriteNumber', auth, req, res)
})

router.post('/favorited', auth, (req, res) => {
  return getFind('/favorited', auth, req, res)
})

router.post('/getFavoredRecipe', (req, res) => {
  return getFind('/getFavoredRecipe', auth, req, res)
})

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

router.post('/addToFavorite', auth, (req, res) => {
  console.log(req.body)
  const favorite = new Favorite({
    userFrom: req.body.userFrom,
    recipeId: req.body.recipeId,
    recipePhoto: req.body.recipePhoto,
    recipeTitle: req.body.recipeTitle,
    recipeDescription: req.body.recipeDescription,
    recipeSteps: req.body.recipeSteps,
    recipeIngredients: req.body.recipeIngredients,
    recipeCategory: req.body.recipeCategory
  })
  console.log(favorite)
  favorite.save((err, doc) => {
    if (err) return res.json({ success: false, err })
    return res.status(200).json({ success: true })
  })
})

router.post('/removeFromFavorite', auth, (req, res) => {
  Favorite.findOneAndDelete({
    recipeId: req.body.recipeId,
    userFrom: req.body.userFrom
  }).exec((err, doc) => {
    if (err) return res.status(400).json({ success: false, err })
    res.status(200).json({ success: true, doc })
  })
})

module.exports = router
