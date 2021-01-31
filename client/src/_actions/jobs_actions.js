import { useReducer, useEffect } from 'react'
import axios from 'axios'
import {
  MAKE_REQUEST_JOB,
  GET_DATA_JOB,
  ERROR_JOB,
  UPDATE_HAS_NEXT_PAGE_JOB,
  FETCH_JOBS,
  ADD_JOB,
  DELETE_JOB
} from './types'
import reducer from '../_reducers/jobs_reducers'

const BASE_URL =
  'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json'

export const fetchJobs = () => dispatch => {
  fetch('http://localhost:5000/api/jobs/')
    .then(res => res.json())
    .then(data => {
      return dispatch({ type: FETCH_JOBS, payload: data })
    })
}

export function addJob(dataToSubmit) {
  const request = axios
    .post(`http://localhost:5000/api/admin/addJob`, dataToSubmit)
    .then(response => response.data)

  return {
    type: ADD_JOB,
    payload: request
  }
}

export default function useFetchJobs(params, page) {
  const [state, dispatch] = useReducer(reducer, { jobs: [], loading: true })

  useEffect(() => {
    const cancelToken1 = axios.CancelToken.source()
    dispatch({ type: MAKE_REQUEST_JOB })
    axios
      .get(BASE_URL, {
        cancelToken: cancelToken1.token,
        params: { markdown: true, page: page, ...params }
      })
      .then(res => {
        dispatch({ type: GET_DATA_JOB, payload: { jobs: res.data } })
      })
      .catch(e => {
        if (axios.isCancel(e)) return
        dispatch({ type: ERROR_JOB, payload: { error: e } })
      })

    const cancelToken2 = axios.CancelToken.source()
    axios
      .get(BASE_URL, {
        cancelToken: cancelToken2.token,
        params: { markdown: true, page: page + 1, ...params }
      })
      .then(res => {
        dispatch({
          type: UPDATE_HAS_NEXT_PAGE_JOB,
          payload: { hasNextPage: res.data.length !== 0 }
        })
      })
      .catch(e => {
        if (axios.isCancel(e)) return
        dispatch({ type: ERROR_JOB, payload: { error: e } })
      })

    return () => {
      cancelToken1.cancel()
      cancelToken2.cancel()
    }
  }, [params, page])

  return state
}

//DELETE THE PRODUCTS
export const deleteJob = code => {
  return dispatch => {
    const options = {
      timeout: 25000,
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    return fetch(`http://localhost:5000/api/jobs/${code}`, options)
      .then(res => res.json())
      .then(data => {
        console.log('DELETE PRODUCT', data)
        if (!Object.entries(data).length) {
          return Promise.reject(data)
        }

        return dispatch({
          type: DELETE_JOB,
          payload: data
        })
      })
  }
}
