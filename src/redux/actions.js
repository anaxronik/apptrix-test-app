import API from '../axios/API'
import { saveAccessToken, saveRefreshToken } from '../localStorage/localStorage'
import {
  AUTH_SET_COUNTRY_KEY,
  AUTH_SET_EMAIL,
  AUTH_SET_INVITED_BY,
  AUTH_SET_LOGIN_PASSWORD,
  AUTH_SET_LOGIN_USERNAME,
  AUTH_SET_NAME,
  AUTH_SET_PASSWORD,
  AUTH_SET_SURNAME,
  AUTH_SET_ACCESS_TOKEN,
  AUTH_CLEAR_ACCESS_TOKEN,
  AUTH_SET_REFRESH_TOKEN,
  AUTH_CLEAR_REFRESH_TOKEN,
  APP_FETCH_USER_DATA,
  APP_SET_CLIENT_ID,
  APP_SET_USER_DATA,
} from './types'

export function setEmail(payload) {
  return {
    type: AUTH_SET_EMAIL,
    payload,
  }
}

export function setPassword(payload) {
  return {
    type: AUTH_SET_PASSWORD,
    payload,
  }
}

export function setInvitedBy(payload) {
  return {
    type: AUTH_SET_INVITED_BY,
    payload,
  }
}

export function setName(payload) {
  return {
    type: AUTH_SET_NAME,
    payload,
  }
}

export function setSurname(payload) {
  return {
    type: AUTH_SET_SURNAME,
    payload,
  }
}

export function setCountryKey(payload) {
  return {
    type: AUTH_SET_COUNTRY_KEY,
    payload,
  }
}

export function registerUser(registerData) {
  return async (dispatch) => {
    console.log()
    try {
      const response = await API.post('/clients/create/', registerData)
      if (response.status === 201) {
        alert('Регистрация успешна')
      }
    } catch (e) {
      alert('Ошибка при регистрации', e)
    }
  }
}

export function setLoginUsername(payload) {
  return {
    type: AUTH_SET_LOGIN_USERNAME,
    payload,
  }
}

export function setLoginPassword(payload) {
  return {
    type: AUTH_SET_LOGIN_PASSWORD,
    payload,
  }
}

export function loginUser(loginData) {
  return async (dispatch) => {
    await API.post('/clients/token/ ', loginData)
      .then((response) => {
        if (response.status === 200) {
          alert('Логин успешен ')
          dispatch(setAccessToken(response.data.access))
          dispatch(setRefreshToken(response.data.refresh))
          dispatch(setClientId(response.data.client_id))
        }
      })
      .catch((res) => {
        alert('Ошибка при входе', res.status)
      })
  }
}

export function setAccessToken(payload) {
  saveAccessToken(payload)
  return {
    type: AUTH_SET_ACCESS_TOKEN,
    payload,
  }
}

export function clearAccessToken() {
  return {
    type: AUTH_CLEAR_ACCESS_TOKEN,
  }
}

export function setRefreshToken(payload) {
  saveRefreshToken(payload)
  return {
    type: AUTH_SET_REFRESH_TOKEN,
    payload,
  }
}

export function clearRefreshToken() {
  return {
    type: AUTH_CLEAR_REFRESH_TOKEN,
  }
}

export function setClientId(payload) {
  return {
    type: APP_SET_CLIENT_ID,
    payload,
  }
}

export function fetchUserData(client_id) {
  return async (dispatch) => {
    await API.get('/clients/' + client_id)
      .then((response) => {
        console.log(response.data)
        dispatch(setUserData(response.data))
      })
      .catch((res) => {
        alert('Ошибка при запросе данных пользователя', res.status)
      })
  }
}

export function setUserData(payload) {
  return {
    type: APP_SET_USER_DATA,
    payload,
  }
}
