import React from 'react'
import { connect } from 'react-redux'
import { USER_REGISTER } from '../actions'
import Abonnement from '../components/Abonnement'
import { getAbonnements, getAbonnement } from '../selectors/abonnement'

const mapStateToProps = state => ({
  abonnements: getAbonnements(state),
  abonnement: getAbonnement(state)
})

const mapDispatchToProps = dispatch => ({
  register: user => dispatch({ type: USER_REGISTER, payload: { user } })
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Abonnement)
