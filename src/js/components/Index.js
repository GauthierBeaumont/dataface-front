import React from 'react'
import QueryToken from '../containers/queries/QueryToken'
import QueryUser from '../containers/queries/QueryUser'
import { getCookie } from '../utils/cookie'

const Index = ({ children }) => (
  <div className="Index">
  	<QueryToken/>
  	{ getCookie('dataface-user-id') ? <QueryUser/> : <noscript/> }
    { children }
  </div>
)

export default Index