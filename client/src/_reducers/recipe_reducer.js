import {
  FETCH_RECIPES,
  FILTER_RECIPES_BY_CATEGORY,
  SEARCH_RECIPES_BY_INGREDIENTS,
  ADD_RECIPE
} from '../_actions/types'

const initialState = {
  items: [],
  filteredItems: [],
  Category: '',
  error: null,
  isLoading: false,
  message: undefined,
  Ingredients: ''
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
      return {
        ...state,
        Ingredients: action.payload.Ingredients,
        filteredItems: action.payload.items
      }
    }
    case ADD_RECIPE:
      return { ...state, addFood: action.payload }
    default:
      return state
  }
}
