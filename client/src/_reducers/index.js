import { combineReducers } from 'redux'
import user from './user_reducer'
import recipe from './recipe_reducer'
import video from './video_reducer'
import jobs from './jobs_reducers'

const rootReducer = combineReducers({
  user,
  recipe,
  video,
  jobs
})

export default rootReducer
