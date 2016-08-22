import { call, put } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga'
import { USER_LOGIN, USER_LOGIN_SUCCESS, USER_LOGIN_FAILED } from '../actions'
import { userLoginApi } from '../api/user'

export function* userLogin ({ payload: { email, password } }) {
  try {
    const user = yield call(userLoginApi, email, password)
    console.log(user)
    if (user) yield put({ type: USER_LOGIN_SUCCESS, payload: { users, classeId } })
    else yield put({ type: USER_LOGIN_FAILED, payload: 'Impossible de charger les utilisateurs de cette classe' })
  } catch (error) {
    yield put({ type: USER_LOGIN_FAILED, payload: 'Erreur serveur.' })
  }
}

function* watchUserLogin () {
  yield* takeEvery(USER_LOGIN, userLogin)
}

function* flow () {
  yield [
    watchUserLogin()
  ]
}

export default flow