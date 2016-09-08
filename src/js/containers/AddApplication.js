import React from 'react'
import { connect } from 'react-redux'
import { APPLICATIONS_ADD } from '../actions'
import AddApplication from '../components/AddApplication'

const mapDispatchToProps = dispatch => ({
  addApplication: application => dispatch({ type: APPLICATIONS_ADD, payload: { application } })
})

export default connect(null, mapDispatchToProps)(AddApplication)
