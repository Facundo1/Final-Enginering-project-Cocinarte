const { Favorite } = require('../models/Favorite')
const { auth } = require('../middleware/auth')
//=================================
//         Fecade Pattern
//=================================

/* getFind acts as a code reducer to apply the reuse 
  technique and at the same time simplify the complexity 
  of the favorite function endpoints of the recipes use case*/

const getFind = (url, auth, req, res) => {
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

module.exports = { getFind }
