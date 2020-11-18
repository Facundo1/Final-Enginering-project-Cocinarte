import { combineReducers } from 'redux'
import user from './user_reducer'
import recipe from './recipe_reducer'

const rootReducer = combineReducers({
  user,
  recipe
})

export default rootReducer
