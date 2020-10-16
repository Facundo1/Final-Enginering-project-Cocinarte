const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RecipeSchema = new Schema({
  photo: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  Steps: {
    type: String,
    required: true
  },
  Ingredients: {
    type: String,
    required: true
  },
  Category: {
    type: String,
    required: true
  }
})

const Recipe = mongoose.model('recipe', RecipeSchema)

module.exports = Recipe
