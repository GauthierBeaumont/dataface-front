import { postURL, getURL, deleteURL } from './fetch'

export const applicationAddApi = ({ application: { name, desciption }, userId }) => {
	return postURL('Docker', { name, description, userId })
}

export const applicationFetchApi = applicationId => {
	return getURL(`Docker/:applicationId`)
}

export const applicationDeleteApi = applicationId => {
	return deleteURL(`Docker/:applicationId`)
}