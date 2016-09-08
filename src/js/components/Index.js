import React from 'react'
import QueryToken from '../containers/queries/QueryToken'
import QueryUser from '../containers/queries/QueryUser'
import QueryAbonnement from '../containers/queries/QueryAbonnement'
import QueryAbonnements from '../containers/queries/QueryAbonnements'
import QueryApplications from '../containers/queries/QueryApplications'
import { getCookie } from '../utils/cookie'

const Index = ({ children }) => {
	const userId = getCookie('dataface-user-id')
  	return (
	  	<div className="Index">
		  	<QueryToken/>
		  	<QueryAbonnements/>
		  	{ userId ? <QueryUser/> : <noscript/> }
		  	{ userId ? <QueryApplications/> : <noscript/> }
		  	{ userId ? <QueryAbonnement/> : <noscript/> }
		    { children }
		</div>
  	)
}

export default Index
