const mongoose = require('mongoose')
const Schema = mongoose.Schema

const favoriteSchema = mongoose.Schema(
  {
    userFrom: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    recipeId: {
      type: String
    },
    recipePhoto: {
      type: String
    },
    recipeTitle: {
      type: String
    },
    recipeDescription: {
      type: String
    },
    recipeSteps: {
      type: String
    },
    recipeIngredients: {
      type: String
    },
    recipeCategory: {
      type: String
    }
  },
  { timestamps: true }
)

const Favorite = mongoose.model('Favorite', favoriteSchema)

module.exports = { Favorite }
