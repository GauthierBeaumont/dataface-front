import React from 'react'
import QueryToken from '../containers/queries/QueryToken'

const Index = ({ children }) => (
  <div className="Index">
  	<QueryToken/>
    { children }
  </div>
)

export default Index