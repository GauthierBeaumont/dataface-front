import { USER_LOGIN_SUCCESS, USER_LOGIN_FAILED } from '../actions'

const user = (state = {}, { type, payload }) => {
  switch (type) {
    case USER_LOGIN_SUCCESS:
    case USER_LOGIN_FAILED:
    default:
      return state
  }
}

export default user