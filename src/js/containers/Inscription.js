import React from 'react'
import { connect } from 'react-redux'
import { USER_REGISTER } from '../actions'
import Inscription from '../components/Inscription'
import { getResgisterStatus, getResgisterError } from '../selectors/inscription'

const mapStateToProps = state => ({
  status: getResgisterStatus(state),
  registerError: getResgisterError(state)
})

const mapDispatchToProps = dispatch => ({
  register: user => dispatch({ type: USER_REGISTER, payload: { user } })
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Inscription)
