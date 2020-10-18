import {
  FETCH_RECIPES,
  FILTER_RECIPES_BY_CATEGORY,
  SEARCH_RECIPES_BY_INGREDIENTS
} from '../_actions/types'

const initialState = {
  items: [],
  filteredItems: [],
  Category: '',
  error: null,
  isLoading: false,
  message: undefined,
  searchedIngredients: ''
}

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_RECIPES:
      return {
        ...state,
        items: action.payload,
        filteredItems: action.payload
      }
    case FILTER_RECIPES_BY_CATEGORY:
      return {
        ...state,
        Category: action.payload.Category,
        filteredItems: action.payload.items
      }
    case SEARCH_RECIPES_BY_INGREDIENTS: {
      const { ingredients } = action
      const Searched = state.recipe.items.filter(val =>
        val.includes(ingredients)
      )
      return { ...state, ingredients, Searched }
    }
    default:
      return state
  }
}
