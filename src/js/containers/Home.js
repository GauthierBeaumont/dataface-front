import React from 'react'
import { connect } from 'react-redux'
import { USER_LOGIN } from '../actions'
import HomeComponent from '../components/Home'

import { getUserError } from '../selectors/user'

const mapStateToProps = state => ({
  error: getUserError(state)
}) 

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch({ type: USER_LOGIN, payload: { email, password } })
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent)
