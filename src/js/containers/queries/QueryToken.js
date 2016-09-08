import React, { Component } from 'react'
import { connect } from 'react-redux'
import { GET_TOKEN } from '../../actions'
import { getCookie } from '../../utils/cookie'

class QueryToken extends Component {
  render () {
    return <noscript/>
  }

  /******************************** COMPONENT LIFECYCLE ********************************/
  componentWillMount () {
    this.request(this.props)
  }

  /******************************** CUSTOM METHODS ********************************/
  request (props) {
    const { getToken } = props
    if (!getCookie('_token')) getToken() // fetch all academies
  }
}

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({
  getToken: () => dispatch({ type: GET_TOKEN })
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QueryToken)
