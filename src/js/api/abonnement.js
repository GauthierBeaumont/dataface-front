import { postURL, getURL } from './fetch'

//1: Premium
//2: Premium+
//3: Free

export const abonnementRegisterApi = ({abonnementId, userId, card_no, cvc, expiration_month, expiration_year, amount}) => {
	return postURL('pay', { typeSubscription: abonnementId, userId, card_no, cvc, expiration_month, expiration_year, amount, pay: "stripe", currency: "EUR" })
}

export const abonnementFetchApi = userId => {
	return getURL(`subscription-info/${userId}`)
}

export const abonnementsFetchApi = () => {
	return getURL(`subscriptions-types`)
}