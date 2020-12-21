import {
  FETCH_RECIPES,
  FILTER_RECIPES_BY_CATEGORY,
  SEARCH_RECIPES_BY_INGREDIENTS
} from './types'

export const fetchRecipes = () => dispatch => {
  fetch('http://localhost:5000/api/recipes/')
    .then(res => res.json())
    .then(data => {
      return dispatch({ type: FETCH_RECIPES, payload: data })
    })
}

export const filterRecipesByCategory = (recipes, category) => dispatch => {
  return dispatch({
    type: FILTER_RECIPES_BY_CATEGORY,
    payload: {
      Category: category,
      items:
        category === ''
          ? recipes
          : recipes.filter(a => a.Category.indexOf(category) >= 0)
    }
  })
}

export const searchByIngredients = (recipes, ingredients) => dispatch => {
  const correctWroteIngredients = ingredients.replace(/\s/g, '')
  const ingredientList = correctWroteIngredients
    ? correctWroteIngredients.split(',')
    : []
  console.log(ingredientList)
  let b, recipeList
  if (recipes.length) {
    recipeList = recipes.filter(recipe => {
      b = false
      ingredientList.forEach(ingredient => {
        if (
          ingredient &&
          recipe.Ingredients.toLowerCase().includes(ingredient.toLowerCase())
        ) {
          b = true
        }
      })
      return b
    })
  }

  return dispatch({
    type: SEARCH_RECIPES_BY_INGREDIENTS,
    payload: {
      Ingredients: ingredients,
      items: recipeList || []
    }
  })
}
