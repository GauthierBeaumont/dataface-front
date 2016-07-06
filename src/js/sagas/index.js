import test from './test'
import { fork } from 'redux-saga/effects'

function* root () {
  yield fork(test)
}

export default root