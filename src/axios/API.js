import axios from 'axios'

let api = axios.create({
  baseURL: 'http://erp.apptrix.ru/api',
  responseType: 'json',
})

//request interceptor
api.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem('access_token')
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token
    }

    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

//response interceptor
api.interceptors.response.use(
  function (response) {
    if (response.status === 401) {
      const refresh = localStorage.getItem('resfresh_token')
      axios
        .post('http://erp.apptrix.ru/api/clients/token/refresh/', {
          refresh,
        })
        .then((response) => {
          localStorage.setItem('access_token', response.data.access)
        })
        .catch((error) => {
          localStorage.clear()
        })
    }
    return response
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default api
