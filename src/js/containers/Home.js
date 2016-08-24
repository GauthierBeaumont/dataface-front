import React from 'react'
import { connect } from 'react-redux'
import { USER_LOGIN } from '../actions'
import HomeComponent from '../components/Home'

import { getUserError, getUser, getUserisLoading } from '../selectors/user'

const mapStateToProps = state => ({
  user: getUser(state),
  error: getUserError(state),
  loading: getUserisLoading(state)
}) 

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch({ type: USER_LOGIN, payload: { email, password } })
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent)
