import { call, put } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga'
import { USER_REGISTER, USER_REGISTER_SUCCESS, USER_REGISTER_FAILED, USER_LOGIN_SUCCESS } from '../actions'
import { userRegisterApi } from '../api/inscription'

export function* userRegister ({ payload: { user } }) {
  try {
    const registerRequest = yield call(userRegisterApi, { user })
    if (registerRequest.status === 'success') {
      yield put({ type: USER_REGISTER_SUCCESS })
      yield put({ type: USER_LOGIN_SUCCESS, payload: { user } })
    }
    else yield put({ type: USER_REGISTER_FAILED, payload: { error: registerRequest.error } })
  } catch (error) {
    if (!error) {
      yield put({ type: USER_REGISTER_SUCCESS })
      yield put({ type: USER_LOGIN_SUCCESS, payload: { user } })
    }
    yield put({ type: USER_REGISTER_FAILED, payload: { error: 'Une erreur est surevenue, veuillez reesayer ultérieurement.' } })
  }
}

function* watchUserRegister () {
  yield* takeEvery(USER_REGISTER, userRegister)
}

function* flow () {
  yield [
    watchUserRegister()
  ]
}

export default flow