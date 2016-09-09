import { postURL, getURL, deleteURL } from './fetch'

export const applicationAddApi = ({ application: { name, description }, userId }) => {
	return postURL('docker', { db_name: name, description, userId })
}

export const applicationFetchApi = (userId) => {
	return getURL(`docker?userId=${userId}`)
}

export const applicationDeleteApi = applicationId => {
	return deleteURL(`docker/:applicationId`)
}
