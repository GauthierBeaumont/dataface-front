import { apiURL } from './config'
import $ from 'jquery'
import { getCookie } from '../utils/cookie'

const _token = getCookie('_token')

export const getURL = (url) => {
  return new Promise((resolve, reject) => {
    $.ajax({
         url : `${apiURL}/${url}`,
         type : 'GET',
         dataType : 'json',
         success : (data, statut) => {
            resolve(data)
         },
         error : (result, statut, error) => {
            reject(error)
         }
      });
  })
}

export const postURL = (url, data) => {
  return new Promise((resolve, reject) => {
    $.ajax({
         url : `${apiURL}/${url}`,
         type : 'POST',
         dataType : 'json',
         data: data,
         success : (data, statut) => {
            resolve(data)
         },
         error : (result, statut, error) => {
            reject(error)
         }
      });
  })
}

export const putURL = (url, data) => {
  return new Promise((resolve, reject) => {
    $.ajax({
         url : `${apiURL}/${url}`,
         type : 'PUT',
         dataType : 'json',
         data: data,
         headers: { 'X-XSRF-TOKEN' : _token },
         success : (data, statut) => {
            resolve(data)
         },
         error : (result, statut, error) => {
            reject(error)
         }
      });
  })
}

export const deleteURL = (url, data) => {
  return new Promise((resolve, reject) => {
    $.ajax({
         url : `${apiURL}/${url}`,
         type : 'DELETE',
         dataType : 'json',
         data: data,
         headers: { 'X-XSRF-TOKEN' : _token },
         success : (data, statut) => {
            resolve(data)
         },
         error : (result, statut, error) => {
            reject(error)
         }
      });
  })
}