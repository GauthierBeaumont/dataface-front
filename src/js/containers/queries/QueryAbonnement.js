import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ABONNEMENT_FETCH } from '../../actions'

class QueryAbonnement extends Component {
  render () {
    return <noscript/>
  }

  /******************************** COMPONENT LIFECYCLE ********************************/
  componentWillMount () {
    this.request(this.props)
  }

  /******************************** CUSTOM METHODS ********************************/
  request (props) {
    const { fetchAbonnement, userId } = props
    if (userId) fetchUser(userId)
  }
}

const mapDispatchToProps = dispatch => ({
  fetchAbonnement: userId => dispatch({ type: ABONNEMENT_FETCH, payload: { userId } })
})

export default connect(
  null,
  mapDispatchToProps
)(QueryAbonnement)