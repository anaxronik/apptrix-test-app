import {
  AUTH_LOGIN,
  AUTH_REGISTER,
  AUTH_SET_EMAIL,
  AUTH_SET_INVITED_BY,
  AUTH_SET_PASSWORD,
  AUTH_SET_NAME,
  AUTH_SET_SURNAME,
  AUTH_SET_COUNTRY_KEY,
  AUTH_SET_LOGIN_USERNAME,
  AUTH_SET_LOGIN_PASSWORD,
  AUTH_SET_ACCESS_TOKEN,
  AUTH_CLEAR_ACCESS_TOKEN,
  AUTH_SET_REFRESH_TOKEN,
  AUTH_CLEAR_REFRESH_TOKEN,
} from './types'

const initialState = {
  access_token: '',
  resfresh_token: '',
  registerData: {
    user: {
      email: '',
      password: '',
    },
    phone: '',
    invited_by: 'RU-637164',
    name: '',
    surname: '',
    country_key: 'RU',
  },
  loginData: {
    username: '',
    password: '',
  },
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state

    case AUTH_LOGIN:
      return { ...state }

    case AUTH_REGISTER:
      return { ...state }

    case AUTH_SET_EMAIL:
      return {
        ...state,
        registerData: {
          ...state.registerData,
          user: {
            ...state.registerData.user,
            email: action.payload,
          },
        },
      }

    case AUTH_SET_PASSWORD:
      return {
        ...state,
        registerData: {
          ...state.registerData,
          user: {
            ...state.registerData.user,
            password: action.payload,
          },
        },
      }

    case AUTH_SET_INVITED_BY:
      return {
        ...state,
        registerData: { ...state.registerData, invited_by: action.payload },
      }

    case AUTH_SET_NAME:
      return {
        ...state,
        registerData: { ...state.registerData, name: action.payload },
      }

    case AUTH_SET_SURNAME:
      return {
        ...state,
        registerData: { ...state.registerData, surname: action.payload },
      }

    case AUTH_SET_COUNTRY_KEY:
      return {
        ...state,
        registerData: { ...state.registerData, country_key: action.payload },
      }

    case AUTH_SET_LOGIN_USERNAME:
      return {
        ...state,
        loginData: { ...state.loginData, username: action.payload },
      }

    case AUTH_SET_LOGIN_PASSWORD:
      return {
        ...state,
        loginData: { ...state.loginData, password: action.payload },
      }

    case AUTH_SET_ACCESS_TOKEN:
      return {
        ...state,
        access_token: action.payload,
      }

    case AUTH_CLEAR_ACCESS_TOKEN:
      return {
        ...state,
        access_token: '',
      }

    case AUTH_SET_REFRESH_TOKEN:
      return {
        ...state,
        resfresh_token: action.payload,
      }

    case AUTH_CLEAR_REFRESH_TOKEN:
      return {
        ...state,
        resfresh_token: '',
      }
  }
}
