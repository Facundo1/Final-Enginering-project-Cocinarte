import { FETCH_RECIPES, FILTER_RECIPES_BY_CATEGORY } from '../_actions/types'

const initialState = {
  items: [],
  filteredItems: [],
  category: '',
  error: null,
  isLoading: false,
  message: undefined,
  adminActions: false,
  productSelected: ''
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
        category: action.payload.category,
        filteredItems: action.payload.items
      }
    default:
      return state
  }
}
