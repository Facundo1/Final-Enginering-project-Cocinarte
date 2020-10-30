import { combineReducers } from 'redux'
import user from './user_reducer'
import recipe from './recipe_reducer'
import BmrReducer from './basal_reducer'

const rootReducer = combineReducers({
  user,
  recipe,
  BmrReducer: BmrReducer
})

export default rootReducer
