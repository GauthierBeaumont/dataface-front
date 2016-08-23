import { call, put, select } from 'redux-saga/effects'
import * as actions from '../actions'
import { takeEvery } from 'redux-saga'
import { getURL } from '../api/fetch'

function* flow() {
  yield* takeEvery(actions.TEST, test)
}

function* test() {
  try {
    console.log(actions)
    const test = yield call(getURL, 'test')
    console.log(test)
  } catch (err) {
    throw(err)
  }
}


export default flow
