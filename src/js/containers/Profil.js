import React from 'react'
import { connect } from 'react-redux'
import { USER_SAVE_PROFILE } from '../actions'
import ProfilComponent from '../components/Profil'

import { getUser } from '../selectors/user'

const mapStateToProps = state => ({
  user: getUser(state)
})

const mapDispatchToProps = dispatch => ({
  saveProfile: user => dispatch({ type: USER_SAVE_PROFILE, payload: { user} })
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilComponent)
