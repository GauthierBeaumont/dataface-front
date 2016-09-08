import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ABONNEMENTS_FETCH } from '../../actions'

class QueryAbonnements extends Component {
  render () {
    return <noscript/>
  }

  /******************************** COMPONENT LIFECYCLE ********************************/
  componentWillMount () {
    this.request(this.props)
  }

  /******************************** CUSTOM METHODS ********************************/
  request (props) {
    const { fetchAbonnements } = props
    fetchAbonnements()
  }
}

const mapDispatchToProps = dispatch => ({
  fetchAbonnements: () => dispatch({ type: ABONNEMENTS_FETCH, })
})

export default connect(
  null,
  mapDispatchToProps
)(QueryAbonnements)