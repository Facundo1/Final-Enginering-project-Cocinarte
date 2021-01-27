import { ADD_VIDEO, DELETE_VIDEO } from './types'
import axios from 'axios'

export function addCurse(dataToSubmit) {
  const request = axios
    .post(`http://localhost:5000/api/admin/addVideo`, dataToSubmit)
    .then(response => response.data)

  return {
    type: ADD_VIDEO,
    payload: request
  }
}

//DELETE THE PRODUCTS
export const deleteCurse = code => {
  return dispatch => {
    const options = {
      timeout: 25000,
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    return fetch(`http://localhost:5000/api/video/${code}`, options)
      .then(res => res.json())
      .then(data => {
        console.log('DELETE PRODUCT', data)
        if (!Object.entries(data).length) {
          return Promise.reject(data)
        }

        return dispatch({
          type: DELETE_VIDEO,
          payload: data
        })
      })
  }
}
