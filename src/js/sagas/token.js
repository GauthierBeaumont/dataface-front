import { call, put } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga'
import { getTokenApi } from '../api/token'
import { setCookie, getCookie } from '../utils/cookie'
import { GET_TOKEN } from '../actions'

export function* setToken () {
  try {
    const { token } = yield call(getTokenApi)
    if (token && getCookie('dataface-token') !== token) yield setCookie('dataface-token', token, 7)
  } catch (error) {
    console.log('Can\'t get the token', error)
  }
}

function* watchGetToken () {
  yield* takeEvery(GET_TOKEN, setToken)
}

function* flow () {
  yield [ watchGetToken() ]
}

export default flow