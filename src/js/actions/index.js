//Test
export const TEST = 'TEST'
export const test = () => ({ type: TEST })

export const TEST_SUCCESS = 'TEST_SUCCESS'
export const testSuccess = () => ({ type: TEST_SUCCESS, payload: 'test success' })

//USER
export const USER_LOGIN = 'USER_LOGIN'
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED'

export const USER_GET_USER = 'USER_GET_USER'
export const USER_SET_USER = 'USER_SET_USER'
export const USER_LOGOUT = 'USER_LOGOUT'

export const USER_SAVE_PROFILE = 'USER_SAVE_PROFILE'
export const USER_SAVE_PROFILE_SUCCESS = 'USER_SAVE_PROFILE_SUCCESS'
export const USER_SAVE_PROFILE_FAILED = 'USER_SAVE_PROFILE_FAILED'

//TOKEN
export const GET_TOKEN = 'GET_TOKEN'
