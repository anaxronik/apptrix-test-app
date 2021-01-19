import axios from 'axios'
import { getAccessToken, getRefreshToken } from '../localStorage/localStorage'

let api = axios.create({
  baseURL: 'http://erp.apptrix.ru/api',
  responseType: 'json',
})

//request interceptor
api.interceptors.request.use(
  function (config) {
    const token = getAccessToken()
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token
    }

    return config
  },
  function (error) {
    console.log('Error in axios request interceptor')
    return Promise.reject(error)
  }
)

//response interceptor
api.interceptors.response.use(
  function (response) {
    console.log('response interceptor', response.status)
    console.log('response:', response)
    if (response.status === 401) {
      console.log('Try refresh token')
      const refresh_token = getRefreshToken()
    }
    return response
  },
  function (error) {
    console.log('Error in response interceptor')
    return Promise.reject(error)
  }
)

export default api
