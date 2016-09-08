import { call, put } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga'
import { ABONNEMENT_REGISTER, ABONNEMENT_REGISTER_SUCCEESS, ABONNEMENT_REGISTER_FAILED,
 ABONNEMENT_FETCH, ABONNEMENT_FETCH_SUCCESS, ABONNEMENT_FETCH_FAILED } from '../actions'
import { registerAbonnementApi, abonnementFetchApi } from '../api/inscription'

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

export function* abonnementFetch ({ payload: { userId } }) {
  try {
    const fetchRequest = yield call(abonnementFetchApi, userId)
    if (fetchRequest.status) {
      yield put({ type: ABONNEMENT_FETCH_SUCCESS, payload: { abonnement: null } })
    }
    else yield put({ type: ABONNEMENT_FETCH_SUCCESS, payload: { abonnement: fetchRequest } })
  } catch (error) {
    console.log(error)
    yield put({ type: ABONNEMENT_FETCH_FAILED, payload: { error: 'Une erreur est surevenue, veuillez reesayer ultérieurement.' } })
  }
}

function* watchAbonnementRegister () {
  yield* takeEvery(ABONNEMENT_REGISTER, registerAbonnement)
}

function* watchAbonnementFetch () {
  yield* takeEvery(ABONNEMENT_FETCH, abonnementFetch)
}


function* flow () {
  yield [
    watchAbonnementRegister(),
    watchAbonnementFetch()
  ]
}

export default flow