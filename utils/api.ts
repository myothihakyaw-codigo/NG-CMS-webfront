import qs from 'qs'
import axios from 'axios'
import { Request, Response, ResponseError } from 'types/Api'

export default async function api<T = any>(url: string, config?: Request): Promise<Response<T>> {
  const { type, token, payload, method = 'GET', ...rest } = config || {}

  rest.headers = rest.headers || {}
  rest.baseURL = process.env.NEXT_PUBLIC_API_URL
  rest.headers['Authorization'] = token ? 'Bearer ' + token : `${process.env.NEXT_PUBLIC_BASIC_AUTH_TOKEN}`

  switch (type) {
    case 'multipart':
      rest.headers['Content-Type'] = 'multipart/form-data'
      break
    case 'csv':
      rest.headers['Accept'] = 'application/csv'
      rest.responseType = 'blob'
      break

    case 'form':
      rest.headers['Content-Type'] = 'application/x-www-form-urlencoded'
      break

    default:
      rest.headers['Content-Type'] = 'application/json'
  }

  return await axios({
    url,
    method,
    ...rest,
    [method !== 'GET' ? 'data' : 'params']: type === 'form' ? qs.stringify(payload) : payload,
  })
    .then(res => {
      if (url.includes('connect/token')) {
        return Promise.resolve({ data: res.data, message: '' })
      } else {
        const { data, message, succeeded, errorCode } = res.data
        return succeeded !== false ? Promise.resolve({ data, message }) : Promise.reject({ code: errorCode, message })
      }
    })
    .catch(err => {
      console.log('here is err catch:', err?.response?.data?.errorCode)
      if (err?.response?.data?.errorCode === 401) {
        // logout()
      }
      const data = err.response?.data
      return Promise.reject({
        code: data?.errorCode || err.response?.status,
        message: data?.message || data?.error_description,
      })
    })
}
