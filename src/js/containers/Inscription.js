import React from 'react'
import { connect } from 'react-redux'
import { USER_REGISTER } from '../actions'
import Inscription from '../components/Inscription'
import { getResgisterStatus, getResgisterMessage } from '../selectors/inscription'

const mapStateToProps = state => ({
  status: getResgisterStatus(state),
  message: getResgisterMessage(state)
})

const mapDispatchToProps = dispatch => ({
  register: user => dispatch({ type: USER_REGISTER, payload: { user } })
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Inscription)
