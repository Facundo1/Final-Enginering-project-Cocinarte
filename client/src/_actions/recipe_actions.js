import { FETCH_RECIPES, FILTER_RECIPES_BY_CATEGORY } from './types'

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
      category: category,
      items:
        category === ''
          ? recipes
          : recipes.filter(a => a.Category.indexOf(category.toUpperCase()) >= 0)
    }
  })
}
