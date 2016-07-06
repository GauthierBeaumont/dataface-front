import { rootURL } from './config'
import {request} from './request'
import trim from 'lodash/trim'

export const fetchUrl = url => (
  request.get(`http://localhost:8000/${url}`)
    .then(res => console.log(res.body))
)

export const postURL = url => (
  request.post(`${rootURL}/`+trim(url, '/'))
    .then(res => res.body)
)