import { USER_REGISTER, USER_REGISTER_SUCCESS, USER_REGISTER_FAILED } from '../actions'
import { setCookie, removeCookie } from '../utils/cookie'

const user = (state = { status: null, message: null }, { type, payload }) => {
  switch (type) {
    case USER_REGISTER:
      return { ...state, status: 'loading', message: null }
    case USER_REGISTER_SUCCESS:
      return { ...state, status: 'success', message: payload.message }
    case USER_REGISTER_FAILED:
      return { ...state, status: 'error', message: payload.message }
    case '@@router/LOCATION_CHANGE':
      return { ...state, message: null, status: null }
    default:
      return state
  }
}

export default user