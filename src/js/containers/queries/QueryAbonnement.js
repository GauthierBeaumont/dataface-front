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
    const { fetchAbonnement } = props
    fetchAbonnement()
  }
}

const mapDispatchToProps = dispatch => ({
  fetchAbonnement: () => dispatch({ type: ABONNEMENT_FETCH })
})

export default connect(
  null,
  mapDispatchToProps
)(QueryAbonnement)