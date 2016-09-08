import { call, put } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga'
import { ABONNEMENT_REGISTER, ABONNEMENT_REGISTER_SUCCEESS, ABONNEMENT_REGISTER_FAILED } from '../actions'
import { registerAbonnementApi } from '../api/inscription'

export function* registerAbonnement ({ payload: { user } }) {
  try {
    const registerRequest = yield call(registerAbonnementApi, { user })
    if (registerRequest.status === 'success') {
      yield put({ type: ABONNEMENT_REGISTER_SUCCEESS, payload: { user } })
    }
    else yield put({ type: ABONNEMENT_REGISTER_FAILED, payload: { error: registerRequest.error } })
  } catch (error) {
    console.log(error)
    yield put({ type: ABONNEMENT_REGISTER_FAILED, payload: { error: 'Une erreur est surevenue, veuillez reesayer ultérieurement.' } })
  }
}

function* watchAbonnementRegister () {
  yield* takeEvery(ABONNEMENT_REGISTER, registerAbonnement)
}

function* flow () {
  yield [
    watchAbonnementRegister()
  ]
}

export default flow