import React from 'react'
import { connect } from 'react-redux'
import { USER_LOGIN } from '../actions'
import HomeComponent from '../components/Home'

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch({ type: USER_LOGIN, payload: { email, password } })
})

export default connect(
  null,
  mapDispatchToProps
)(HomeComponent)
