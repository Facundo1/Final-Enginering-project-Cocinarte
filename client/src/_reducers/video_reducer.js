import { ADD_VIDEO, DELETE_VIDEO } from '../_actions/types'

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
    case ADD_VIDEO:
      return { ...state, addVideo: action.payload }
    default:
      return state
  }
}
