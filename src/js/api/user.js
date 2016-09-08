import { postURL, getURL, putURL, deleteURL } from './fetch'

export const userLoginApi = (email, password) => {
	return postURL('login', { email, password })
}

export const fetchUserApi = (userId) => {
	return getURL(`profile/${userId}`)
}

export const updateUserApi = (userId, { id, firstName, lastName, address, country, postalCode, phone, password }) => {
	return putURL(`profile/${userId}`, { id, firstName, lastName, address, country, postalCode, phone, password })
}

export const deleteUserApi = (userId) => {
	return deleteURL(`profile/${userId}`)
}