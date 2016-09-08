import { call, put } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga'
import { ABONNEMENT_REGISTER, ABONNEMENT_REGISTER_SUCCEESS, ABONNEMENT_REGISTER_FAILED,
 ABONNEMENT_FETCH, ABONNEMENT_FETCH_SUCCESS, ABONNEMENT_FETCH_FAILED,
 ABONNEMENTS_FETCH, ABONNEMENTS_FETCH_SUCCESS, ABONNEMENTS_FETCH_FAILED } from '../actions'
import { abonnementRegisterApi, abonnementFetchApi, abonnementsFetchApi } from '../api/abonnement'
import { getCookie } from '../utils/cookie'

export function* registerAbonnement ({ payload: { abonnementId, ...data } }) {
  try {
    const userId = getCookie('dataface-user-id')
    const registerRequest = yield call(abonnementRegisterApi, { userId, abonnementId, ...data })
    if (registerRequest.status === 'succeeded') {
      yield put({ type: ABONNEMENT_REGISTER_SUCCEESS })
    }
    else yield put({ type: ABONNEMENT_REGISTER_FAILED, payload: { error: 'Une erreur est surevenue, veuillez reesayer ultérieurement.' } })
  } catch (error) {
    console.log(error)
    yield put({ type: ABONNEMENT_REGISTER_FAILED, payload: { error: 'Une erreur est surevenue, veuillez reesayer ultérieurement.' } })
  }
}

export function* abonnementFetch () {
  try {
    const userId = getCookie('dataface-user-id')
    const fetchRequest = yield call(abonnementFetchApi, userId)
    if (fetchRequest.status) {
      yield put({ type: ABONNEMENT_FETCH_FAILED, payload: { abonnement: null } })
    }
    else yield put({ type: ABONNEMENT_FETCH_SUCCESS, payload: { abonnement: fetchRequest } })
  } catch (error) {
    console.log(error)
    yield put({ type: ABONNEMENT_FETCH_FAILED, payload: { error: 'Une erreur est surevenue, veuillez reesayer ultérieurement.' } })
  }
}

export function* abonnementsFetch () {
  try {
    const fetchRequest = yield call(abonnementsFetchApi)
    if (fetchRequest) {
      yield put({ type: ABONNEMENTS_FETCH_SUCCESS, payload: { abonnements: fetchRequest } })
    }
  } catch (error) {
    console.log(error)
  }
}

function* watchAbonnementRegister () {
  yield* takeEvery(ABONNEMENT_REGISTER, registerAbonnement)
}

function* watchAbonnementFetch () {
  yield* takeEvery(ABONNEMENT_FETCH, abonnementFetch)
}

function* watchAbonnementsFetch () {
  yield* takeEvery(ABONNEMENTS_FETCH, abonnementsFetch)
}

function* flow () {
  yield [
    watchAbonnementRegister(),
    watchAbonnementFetch(),
    watchAbonnementsFetch()
  ]
}

export default flow