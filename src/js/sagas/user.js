import { call, put } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga'
import { USER_LOGIN, USER_LOGIN_SUCCESS, USER_LOGIN_FAILED, 
  USER_SET_USER, USER_GET_USER, USER_LOGOUT,
  USER_DELETE, USER_DELETE_SUCCESS, USER_DELETE_FAILED, USER_SAVE_PROFILE,
  USER_SAVE_PROFILE_FAILED, USER_SAVE_PROFILE_SUCCESS } from '../actions'
import { userLoginApi, fetchUserApi, updateUserApi, deleteUserApi } from '../api/user'
import { getUser } from '../selectors/user'
import { getCookie } from '../utils/cookie'

export function* userLogin ({ payload: { email, password } }) {
  try {
    const user = yield call(userLoginApi, email, password)
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
  } catch (error) {}
}

export function* saveProfile ({ payload: { user } }) {
  try {
    const userId = getCookie('dataface-user-id')
    const updateRequest = yield call(updateUserApi, userId, user)
    if (updateRequest.status === 'suceess') {
      yield put({ type: USER_SAVE_PROFILE_SUCCESS, payload: { user } })
    } else {
     yield put({ type: USER_SAVE_PROFILE_FAILED })
    }
  } catch (error) {
    yield put({ type: USER_SAVE_PROFILE_FAILED })
  }
}


export function* deleteUser () {
  try {
    const userId = getCookie('dataface-user-id')
    const deleteRequest = yield call(deleteUserApi, userId)
    if (deleteRequest.status === 'suceess') {
      yield put({ type: USER_DELETE_SUCCESS })
      yield put({ type: USER_LOGOUT })
    } else {
      yield put({ type: USER_DELETE_FAILED })
    }
  } catch (error) {
    yield put({ type: USER_DELETE_FAILED })
  }
}

function* watchUserLogin () {
  yield* takeEvery(USER_LOGIN, userLogin)
}

function* watchGetUser () {
  yield* takeEvery(USER_GET_USER, fetchUser)
}

function* watchSaveProfile () {
  yield* takeEvery(USER_SAVE_PROFILE, saveProfile)
}

function* watchDeleteUser () {
  yield* takeEvery(USER_DELETE, deleteUser)
}

function* flow () {
  yield [
    watchUserLogin(),
    watchGetUser(),
    watchSaveProfile(),
    watchDeleteUser()
  ]
}

export default flow