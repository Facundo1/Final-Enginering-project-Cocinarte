import { ADD_CASH_PAY } from '../_actions/types'

export default function(state = {}, action) {
  switch (action.type) {
    case ADD_CASH_PAY:
      return { ...state, pays: action.payload }

    default:
      return state
  }
}
