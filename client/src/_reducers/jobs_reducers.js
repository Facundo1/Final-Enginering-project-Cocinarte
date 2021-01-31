import {
  MAKE_REQUEST_JOB,
  GET_DATA_JOB,
  ERROR_JOB,
  UPDATE_HAS_NEXT_PAGE_JOB,
  FETCH_JOBS,
  ADD_JOB,
  DELETE_JOB
} from '../_actions/types'

const initialState = {
  jobs: [],
  filteredItems: [],
  Category: '',
  error: '',
  isLoading: false,
  hasNextPage: ''
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_JOBS:
      return {
        ...state,
        jobs: action.payload
      }
    case MAKE_REQUEST_JOB:
      return { loading: true, jobs: [] }
    case GET_DATA_JOB:
      return { ...state, loading: false, jobs: action.payload.jobs }
    case ERROR_JOB:
      return { ...state, loading: false, error: action.payload.error, jobs: [] }
    case UPDATE_HAS_NEXT_PAGE_JOB:
      return { ...state, hasNextPage: action.payload.hasNextPage }
    case ADD_JOB:
      return { ...state, addJob: action.payload }
    case DELETE_JOB:
      console.log(action.payload)
      const newProducts = [...state.jobs]
      const productToDelete = newProducts.findIndex(
        ele => ele._id === action.payload._id
      )

      newProducts.splice(productToDelete, 1)
      return {
        ...state,
        isLoading: false,
        jobs: newProducts
      }
    default:
      return state
  }
}
