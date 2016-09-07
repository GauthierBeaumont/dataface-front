import { getURL } from './fetch'

export const getTokenApi = () => {
	return getURL('generateToken')
}