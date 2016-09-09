import React from 'react'
import { connect } from 'react-redux'
import { USER_SAVE_PROFILE, USER_DELETE } from '../actions'
import ProfilComponent from '../components/Profil'

import { getUser, getEditStatus } from '../selectors/user'

const mapStateToProps = state => ({
  user: getUser(state),
  editStatus: getEditStatus(state)
})

const mapDispatchToProps = dispatch => ({
  saveProfile: user => dispatch({ type: USER_SAVE_PROFILE, payload: { user } }),
  deleteAccount: () => dispatch({ type: USER_DELETE })
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilComponent)
