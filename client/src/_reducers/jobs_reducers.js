import {
  MAKE_REQUEST_JOB,
  GET_DATA_JOB,
  ERROR_JOB,
  UPDATE_HAS_NEXT_PAGE_JOB,
  FETCH_JOBS,
  ADD_JOB
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
        jobs: action.payload,
        filteredItems: action.payload
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
    default:
      return state
  }
}
