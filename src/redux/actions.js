import API from '../axios/API'
import {
  APP_SET_USER_DATA,
  AUTH_SET_CLIENT_ID,
  AUTH_SET_USER_NAME,
} from './types'

export function registerUser(registerData) {
  return async (dispatch) => {
    try {
      const response = await API.post('/clients/create/', registerData)
      if (response.status === 201) {
        alert('Регистрация успешна')
      }
    } catch (error) {
      let errors = error.response.data
      let errorText = [
        errors.message ? `Email: ${errors.message}` : null,
        errors.user
          ? errors.user.password
            ? `Пароль: ${errors.user.password}`
            : null
          : null,
        errors.invited_by ? `Инвайт код: ${errors.invited_by}` : null,
        errors.name ? `Имя: ${errors.name}` : null,
        errors.surname ? `Фамилия: ${errors.surname}` : null,
        errors.country_key ? `Код страны: ${errors.country_key}` : null,
      ]
      alert(errorText.join(' '))
    }
  }
}

export function loginUser(loginData) {
  return async (dispatch) => {
    await API.post('/clients/token/ ', loginData)
      .then((response) => {
        console.log(response)
        if (response.status === 200) {
          localStorage.setItem('access_token', response.data.access)
          localStorage.setItem('resfresh_token', response.data.refresh)
          localStorage.setItem('client_id', response.data.client_id)
          dispatch(setClientId(response.data.client_id))
          dispatch(setUserName(response.data.username))
          alert('Логин успешен ')
        }
      })
      .catch((error) => {
        let errors = error.response.data
        let errorText = [
          errors.username ? `Email: ${errors.username}` : null,
          errors.password ? `Пароль: ${errors.password}` : null,
          errors.detail ? `${errors.detail}` : null,
        ]
        alert(errorText.join(' '))
      })
  }
}

export function loginOut() {
  return async (dispatch) => {
    dispatch(setClientId(''))
    dispatch(setUserName(''))

    localStorage.clear()
  }
}

export function setClientId(payload) {
  return {
    type: AUTH_SET_CLIENT_ID,
    payload,
  }
}

export function setUserName(payload) {
  return {
    type: AUTH_SET_USER_NAME,
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
        alert('Ошибка при запросе данных пользователя')
      })
  }
}

export function setUserData(payload) {
  return {
    type: APP_SET_USER_DATA,
    payload,
  }
}
