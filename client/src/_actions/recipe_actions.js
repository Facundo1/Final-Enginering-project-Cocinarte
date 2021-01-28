import {
  FETCH_RECIPES,
  FILTER_RECIPES_BY_CATEGORY,
  SEARCH_RECIPES_BY_INGREDIENTS,
  ADD_RECIPE,
  DELETE_RECIPE
} from './types'
import axios from 'axios'

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

export function addRecipe(dataToSubmit) {
  const request = axios
    .post(`http://localhost:5000/api/admin/addRecipe`, dataToSubmit)
    .then(response => response.data)

  return {
    type: ADD_RECIPE,
    payload: request
  }
}

//DELETE THE PRODUCTS
export const deleteRecipe = code => {
  return dispatch => {
    const options = {
      timeout: 25000,
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    return fetch(`http://localhost:5000/api/recipes/${code}`, options)
      .then(res => res.json())
      .then(data => {
        console.log('DELETE PRODUCT', data)
        if (!Object.entries(data).length) {
          return Promise.reject(data)
        }

        return dispatch({
          type: DELETE_RECIPE,
          payload: data
        })
      })
  }
}
