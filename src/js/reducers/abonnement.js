import { ABONNEMENT_REGISTER, ABONNEMENT_REGISTER_SUCCEESS, ABONNEMENT_REGISTER_FAILED,
 ABONNEMENT_FETCH, ABONNEMENT_FETCH_SUCCESS, ABONNEMENT_FETCH_FAILED,
 ABONNEMENTS_FETCH_SUCCESS } from '../actions'
import { apiURL } from '../api/config'
import { getCookie } from '../utils/cookie'

const abonnement = (state = { status: null, message: null, abonnement: null, abonnements: null }, { type, payload }) => {
  switch (type) {
    case ABONNEMENT_REGISTER:
    case ABONNEMENT_FETCH:
      return { ...state, status: 'loading', message: null }
    case ABONNEMENT_REGISTER_SUCCEESS:
      const userId = getCookie('dataface-user-id')
      return { ...state, status: 'success', message: `<div>Votre abonnement a bien été payé. <a href="${apiURL}/invoicePdf/${userId}" target="_blank">Votre facture ici</a></div>` }
    case ABONNEMENT_FETCH_SUCCESS:
      return { ...state, status: null, message: null, abonnement: payload.abonnement }
    case ABONNEMENTS_FETCH_SUCCESS:
      return { ...state, abonnements: payload.abonnements }
    case ABONNEMENT_REGISTER_FAILED:
    case ABONNEMENT_FETCH_FAILED:
      return { ...state, status: 'error', message: payload.error }
    case '@@router/LOCATION_CHANGE':
      return { ...state, message: null, status: null }
    default:
      return state
  }
}

export default abonnement