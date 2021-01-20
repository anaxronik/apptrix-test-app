import { AUTH_SET_USER_NAME, AUTH_SET_CLIENT_ID } from './types'

const initialState = {
  username: '',
  client_id: '',
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SET_USER_NAME:
      return { ...state, username: action.payload }

    case AUTH_SET_CLIENT_ID:
      return { ...state, client_id: action.payload }

    default:
      return state
  }
}
