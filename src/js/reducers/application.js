import { APPLICATIONS_ADD, APPLICATIONS_ADD_SUCCEESS, APPLICATIONS_ADD_FAILED, 
  APPLICATIONS_FETCH, APPLICATIONS_FETCH_SUCCESS, APPLICATIONS_FETCH_FAILED,
  APPLICATIONS_DELETE, APPLICATIONS_DELETE_SUCCESS, APPLICATIONS_DELETE_FAILED } from '../actions'

const user = (state = { status: null, message: null, applications: [] }, { type, payload }) => {
  switch (type) {
    case APPLICATIONS_ADD:
    case APPLICATIONS_FETCH:
    case APPLICATIONS_DELETE:
      return { ...state, status: 'loading', message: null }
    case APPLICATIONS_ADD_SUCCEESS:
      return { ...state, status: null, message: null, applications: [ ...state.applications, payload.application ] }
    case APPLICATIONS_FETCH_SUCCESS:
      return { ...state, status: null, message: null, applications: payload.application }
    case APPLICATIONS_DELETE_SUCCESS:
      const index = state.applications.findIndex(application => application.id === applicationId)
      if (index !== -1) {
        const newApplications = [ ...state.applications.slice(0, index), ...state.applications.slice(index + 1) ]
        return { ...state, status: null, message: null, applications: newApplications }
      }
    case APPLICATIONS_ADD_FAILED:
    case APPLICATIONS_FETCH_FAILED:
    case APPLICATIONS_DELETE_FAILED:
      return { ...state, status: 'error', message: payload.error }
    case '@@router/LOCATION_CHANGE':
      return { ...state, message: null, status: null }
    default:
      return state
  }
}

export default user