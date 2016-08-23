import { USER_LOGIN_SUCCESS, USER_LOGIN_FAILED, USER_LOGIN, USER_SET_USER, USER_LOGOUT } from '../actions'
import { setCookie, removeCookie } from '../utils/cookie'

const user = (state = { user: null, loading: false, error: '' }, { type, payload }) => {
  switch (type) {
    case USER_LOGIN:
      return { ...state, loading: true }
    case USER_LOGIN_SUCCESS:
      setCookie('dataface-user-id', payload.user.id, 7)
      return { ...state, user: payload.user }
    case USER_LOGIN_FAILED:
      return { ...state, error: payload.error }
    case USER_SET_USER:
      return { ...state, user: payload.user }
    case USER_LOGOUT:
      removeCookie('dataface-user-id')
      return { ...state, user: null }
    default:
      return state
  }
}

export default user