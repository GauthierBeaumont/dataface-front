import { postURL, getURL } from './fetch'

//1: Premium
//2: Premium+
//3: Free

export const abonnementRegisterApi = (abonnementId, userId) => {
	return postURL('abonnement', { abonnementId, userId })
}

export const abonnementFetchApi = userId => {
	return getURL(`subscription-info/:userId`)
}