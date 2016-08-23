import { postURL, getURL } from './fetch'
import $ from 'jquery'


export const userLoginApi = (email, password) => {
	return new Promise((resolve, reject) => {
		$.ajax({
	       url : 'http://localhost:8000/api/login',
	       type : 'POST',
	       dataType : 'json',
	       data: { email, password },
	       success : (data, statut) => { // success est toujours en place, bien sûr !
	           resolve(data)
	       },
	       error : (result, statut, error) => {
	       		reject(error)
	       }
	    });
	})
}

export const fetchUserApi = ({ userId }) => {
	return getURL(`api/user/${userId}`)
}