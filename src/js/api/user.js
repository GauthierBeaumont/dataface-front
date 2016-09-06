import { postURL, getURL } from './fetch'

export const userLoginApi = (email, password) => {
	return postURL('login', { email, password })
}

export const fetchUserApi = ({ userId }) => {
	return getURL(`api/user/${userId}`)
}