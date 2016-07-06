import test from './test'
import { fork } from 'redux-saga/effects'
import { fetchUrl } from '../api/fetch'

function* root () {
  yield fork(test)
}

fetchUrl('api/test')

export default root