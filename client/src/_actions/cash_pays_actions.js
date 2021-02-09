import axios from 'axios'
import { ADD_CASH_PAY } from './types'

export function addCashPay(dataToSubmit) {
  const request = axios
    .post('api/checkout/addCashPays', dataToSubmit)
    .then(response => response.data)

  return {
    type: ADD_CASH_PAY,
    payload: request
  }
}
