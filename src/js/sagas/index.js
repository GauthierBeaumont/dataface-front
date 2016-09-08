import test from './test'
import user from './user'
import inscription from './inscription'
import token from './token'
import abonnement from './abonnement'
import application from './application'
import { fork, call } from 'redux-saga/effects'
import { fetchUrl } from '../api/fetch'

function* root () {
  yield [
  	fork(test),
  	fork(user),
  	fork(inscription),
  	fork(token),
  	fork(application),
  	fork(abonnement)
  ]
}

export default root
