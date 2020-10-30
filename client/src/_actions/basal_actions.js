import { actionConstants } from './types'

export function initializeBmr(bmr) {
  return {
    type: actionConstants.INIT_BMR,
    data: bmr
  }
}

export function modifyBmr(bmr) {
  return {
    type: actionConstants.MODIFY_BMR,
    data: bmr
  }
}
