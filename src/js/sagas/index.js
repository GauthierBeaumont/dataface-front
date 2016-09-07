import test from './test'
import user from './user'
import inscription from './inscription'
import token from './token'
import { fork, call } from 'redux-saga/effects'
import { fetchUrl } from '../api/fetch'

function* root () {
  yield [
  	fork(test),
  	fork(user),
  	fork(inscription),
  	fork(token)
  ]
}

export default root
