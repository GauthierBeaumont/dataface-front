import { postURL } from './fetch'

export const userLoginApi = ({ email, password }) => {
	return postURL('api/connect', { email, password })
}