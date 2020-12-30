const express = require('express')
const router = express.Router()
const { Favorite } = require('../models/Favorite')
const { auth } = require('../middleware/auth')

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

//=================================
//         Fecade Pattern
//=================================

/* getFind acts as a code reducer to apply the reuse 
  technique and at the same time simplify the complexity 
  of the favorite function endpoints of the recipes use case*/
function getFind(url, auth, req, res) {
  if (url === '/favoriteNumber') {
    Favorite.find({ recipeId: req.body.recipeId }).exec((err, favorite) => {
      if (err) return res.status(400).send(err)
      res.status(200).json({ success: true, FavoriteNumber: favorite.length })
    })
  } else if (url === '/favorited') {
    Favorite.find({
      recipeId: req.body.recipeId,
      userFrom: req.body.userFrom
    }).exec((err, favorite) => {
      if (err) return res.status(400).send(err)

      let result = false
      if (favorite.length !== 0) {
        result = true
      }

      res.status(200).json({ success: true, favorited: result })
    })
  } else if (url === '/getFavoredRecipe') {
    Favorite.find({ userFrom: req.body.userFrom }).exec((err, favorites) => {
      if (err) return res.status(400).send(err)
      return res.status(200).json({ success: true, favorites })
    })
  }
}

module.exports = router
