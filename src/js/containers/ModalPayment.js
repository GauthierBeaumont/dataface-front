import React from 'react'
import { connect } from 'react-redux'
import { ABONNEMENT_REGISTER } from '../actions'
import ModalPayment from '../components/ModalPayment'
import { getAbonnementStatus, getAbonnementMessage } from '../selectors/abonnement'

const mapStateToProps = state => ({
  status: getAbonnementStatus(state),
  message: getAbonnementMessage(state)
})

const mapDispatchToProps = dispatch => ({
  addAbonnement: abonnement => dispatch({ type: ABONNEMENT_REGISTER, payload: abonnement })
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalPayment)
