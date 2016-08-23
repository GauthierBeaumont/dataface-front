import test from './test'
import { fork, call } from 'redux-saga/effects'
import { fetchUrl } from '../api/fetch'

function* root () {
  yield fork(test)
}

export default root
