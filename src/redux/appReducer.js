import {
  APP_FETCH_USER_DATA,
  APP_SET_CLIENT_ID,
  APP_SET_USER_DATA,
} from './types'

const initialState = {
  user: {},
  client_id: 'RU-176605',
}

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state

    case APP_FETCH_USER_DATA:
      return { ...state, user: action.payload }

    case APP_SET_CLIENT_ID:
      return { ...state, client_id: action.payload }

    case APP_SET_USER_DATA:
      console.log('case APP_SET_USER_DATA:')
      return { ...state, user: action.payload }
  }
}
