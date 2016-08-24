import { TEST, TEST_SUCCESS } from '../actions'

export default function layer (state = { test: 'nothing' }, action) {
  if (action.type === TEST) {
    return {
      ...state,
      test: action.payload
    }
  }
  else if (action.type === TEST_SUCCESS ){
  	return {
      ...state,
      test: action.payload
    }
  }

  return state
}