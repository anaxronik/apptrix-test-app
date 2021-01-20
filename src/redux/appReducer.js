import { APP_FETCH_USER_DATA, APP_SET_USER_DATA } from './types'

const initialState = {
  user: {},
  client_id: 'RU-176605',
}

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case APP_FETCH_USER_DATA:
      return { ...state, user: action.payload }

    case APP_SET_USER_DATA:
      return { ...state, user: action.payload }

    default:
      return state
  }
}
