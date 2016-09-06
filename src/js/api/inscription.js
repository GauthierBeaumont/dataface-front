import { postURL } from './fetch'

export const userRegisterApi = ({ user: { firstName, lastName, address, country, postalCode, phone, email, password, password_confirmation}}) => {
	return postURL('register', {firstName, lastName, address, country, postalCode, phone, email, password, password_confirmation})
}