import { actionConstants } from '../_actions/types'

let initialState = {
  bmrValue: 0,
  bmrValueModified: 0,
  isInitialized: false
}

export default function bmrReducer(state = initialState, action) {
  switch (action.type) {
    case actionConstants.INIT_BMR:
      return Object.assign({}, state, {
        bmrValue: action.data,
        bmrValueModified: action.data,
        isInitialized: true
      })
    case actionConstants.MODIFY_BMR:
      return Object.assign({}, state, { bmrValueModified: action.data })

    default:
      return state
  }
}
