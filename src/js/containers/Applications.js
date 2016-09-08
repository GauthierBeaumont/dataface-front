import React, { Component } from 'react'
import { connect } from 'react-redux'
import Applications from '../components/Applications'

import { getApplications } from '../selectors/application'
import { getAbonnement } from '../selectors/abonnement'

const mapStateToProps = state => ({
  applications: getApplications(state),
  abonnement: getAbonnement(state),
  status: 'success',
  message: 'Erreur'
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Applications)
