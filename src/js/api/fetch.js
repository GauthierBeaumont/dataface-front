import { apiURL } from './config'
import request from './request'

export const getURL = (url) => (
  request.get(`${apiURL}/${url}`)
    .then(res => res.body)
)

export const postURL = (url, data) => (
  request.post(`${apiURL}/${url}`)
    .withCredentials()
  	.send(data)
    .then(res => res.body)
)

export const putURL = (url, data) => (
  request.put(`${apiURL}/${url}`)
  	.send(data)
    .then(res => res.body)
)

export const deleteURL = url => (
  request.del(`${apiURL}/${url}`)
    .then(res => res.body)
)
