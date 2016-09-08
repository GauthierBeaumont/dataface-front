import React from 'react'
import { connect } from 'react-redux'
import { USER_REGISTER } from '../actions'
import Inscription from '../components/Inscription'
import { getResgisterStatus, getResgisterError } from '../selectors/inscription'
import { getUser } from '../selectors/user'

const mapStateToProps = state => ({
  status: getResgisterStatus(state),
  registerError: getResgisterError(state),
  user: getUser(state)
})

const mapDispatchToProps = dispatch => ({
  register: user => dispatch({ type: USER_REGISTER, payload: { user } })
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Inscription)
