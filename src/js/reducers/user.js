import { USER_LOGIN_SUCCESS, USER_LOGIN_FAILED, USER_LOGIN, 
  USER_SET_USER, USER_LOGOUT, USER_DELETE_FAILED, USER_DELETE,
  USER_SAVE_PROFILE_SUCCESS, USER_SAVE_PROFILE_FAILED } from '../actions'
import { setCookie, removeCookie } from '../utils/cookie'

const defaultState = { user: null, loading: false, error: '', editStatus: null }

const user = (state = defaultState, { type, payload }) => {
  switch (type) {
    case USER_LOGIN:
      return { ...state, loading: true }
    case USER_LOGIN_SUCCESS:
      setCookie('dataface-user-id', payload.user.id, 7)
      const user = payload.user
      delete user.password
      delete user.passord_confirmation
      return { ...state, user }
    case USER_LOGIN_FAILED:
      return { ...state, error: payload }
    case USER_SET_USER:
      return { ...state, user: payload.user }
    case USER_DELETE_FAILED:
    case USER_SAVE_PROFILE_FAILED:
      return { ...state, editStatus: { type: 'error', text: 'Une erreur est survenuee merci de ressayer plutard.' } }
    case USER_SAVE_PROFILE_SUCCESS:
      return { ...state, editStatus: { type: 'success', text: 'Votre profil a bien été modifié' } }
    case USER_LOGOUT:
      removeCookie('dataface-user-id')
      return { ...state }
    case '@@router/LOCATION_CHANGE':
      return { ...state, editStatus: '' }
    default:
      return state
  }
}

export default user