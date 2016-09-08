import { ABONNEMENT_REGISTER, ABONNEMENT_REGISTER_SUCCEESS, ABONNEMENT_REGISTER_FAILED,
 ABONNEMENT_FETCH, ABONNEMENT_FETCH_SUCCESS, ABONNEMENT_FETCH_FAILED } from '../actions'

const abonnement = (state = { status: null, message: null, abonnement: null }, { type, payload }) => {
  switch (type) {
    case ABONNEMENT_REGISTER:
    case ABONNEMENT_FETCH:
      return { ...state, status: 'loading', message: null }
    case ABONNEMENT_REGISTER_SUCCEESS:
      return { ...state, status: null, message: `Votre application ${payload.abonnement.type_subscription.name} a bien été créer`, abonnement: payload.abonnement }
    case ABONNEMENT_FETCH_SUCCESS:
      return { ...state, status: null, message: null, abonnement: payload.abonnement }
    case ABONNEMENT_REGISTER_FAILED:
    case ABONNEMENT_FETCH_FAILED:
      return { ...state, status: 'error', message: payload.error }
    default:
      return state
  }
}

export default abonnement