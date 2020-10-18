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

export const searchByIngredients = ingredients => dispatch => {
  return dispatch({ type: SEARCH_RECIPES_BY_INGREDIENTS, payload: ingredients })
}
