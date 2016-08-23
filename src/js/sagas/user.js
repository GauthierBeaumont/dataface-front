import { call, put } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga'
import { USER_LOGIN, USER_LOGIN_SUCCESS, USER_LOGIN_FAILED, USER_SET_USER, USER_GET_USER } from '../actions'
import { userLoginApi, fetchUserApi } from '../api/user'
import { getUser } from '../selectors/user'
import { getCookie } from '../utils/cookie'

export function* userLogin ({ payload: { email, password } }) {
  try {
    const user = yield call(userLoginApi, email, password)
    console.log(user)
    if (user.status === 'success') yield put({ type: USER_LOGIN_SUCCESS, payload: { user: user.userData } })
    else yield put({ type: USER_LOGIN_FAILED, payload: 'E-mail ou mot de passe incorrect.' })
  } catch (error) {
    yield put({ type: USER_LOGIN_FAILED, payload: 'Erreur serveur.' })
  }
}

export function* fetchUser () {
  try {
    const userConnected = getUser()
    const userId = getCookie('dataface-user-id')
    if (!userConnected && userId) {
      const user = yield call(fetchUserApi, userId)
      if (user) yield put({ type: USER_SET_USER, payload: { user } })
    }
  } catch (error) {
    
  }
}

function* watchUserLogin () {
  yield* takeEvery(USER_LOGIN, userLogin)
}

function* watchGetUser () {
  yield* takeEvery(USER_GET_USER, fetchUser)
}

function* flow () {
  yield [
    watchUserLogin(),
    watchGetUser()
  ]
}

export default flow