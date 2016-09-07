import { postURL, getURL, putURL, deleteURL } from './fetch'

export const userLoginApi = (email, password) => {
	return postURL('login', { email, password })
}

export const fetchUserApi = (userId) => {
	return getURL(`user/${userId}`)
}

export const updateUserApi = (userId, user) => {
	return putURL(`profile/${userId}`, { user })
}

export const deleteUserApi = (userId) => {
	return deleteURL(`user/${userId}`)
}