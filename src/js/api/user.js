import { postURL, getURL } from './fetch'
import $ from 'jquery'


export const userLoginApi = (email, password) => {
	return postURL('login', { email, password })
}

export const fetchUserApi = ({ userId }) => {
	return getURL(`api/user/${userId}`)
}