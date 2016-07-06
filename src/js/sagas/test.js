import { call, put, select } from 'redux-saga/effects'
import * as actions from '../actions'
import { takeEvery } from 'redux-saga'

function* flow() {
  yield* takeEvery(actions.TEST, test)
}

function* test() {
  try {
    yield put(actions.testSuccess())
  } catch (err) {
    throw(err)
  }
}


export default flow