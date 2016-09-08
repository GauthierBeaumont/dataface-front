import React, { Component } from 'react'
import { connect } from 'react-redux'
import { APPLICATIONS_FETCH } from '../../actions'

class QueryApplications extends Component {
  render () {
    return <noscript/>
  }

  /******************************** COMPONENT LIFECYCLE ********************************/
  componentWillMount () {
    this.request(this.props)
  }

  /******************************** CUSTOM METHODS ********************************/
  request (props) {
    const { fetchApplications } = props
    fetchApplications()
  }
}

const mapDispatchToProps = dispatch => ({
  fetchApplications: () => dispatch({ type: APPLICATIONS_FETCH })
})

export default connect(
  null,
  mapDispatchToProps
)(QueryApplications)
