import { USER_REGISTER, USER_REGISTER_SUCCESS, USER_REGISTER_FAILED } from '../actions'
import { setCookie, removeCookie } from '../utils/cookie'

const user = (state = { status: null, error: null }, { type, payload }) => {
  switch (type) {
    case USER_REGISTER:
      return { ...state, status: 'loading', error: null }
    case USER_REGISTER_SUCCESS:
      return { ...state, status: null, error: null }
    case USER_REGISTER_FAILED:
      return { ...state, status: 'error', error: payload.error }
    default:
      return state
  }
}

export default user