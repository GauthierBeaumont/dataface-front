import { rootURL } from './config'
import request from './request'
import trim from 'lodash/trim'

export const fetchUrl = url => (
  request.get(`${rootURL}/`+trim(url, '/'))
    .then(res => res.body)
)

export const postURL = url => (
  request.post(`${rootURL}/`+trim(url, '/'))
    .then(res => res.body)
)