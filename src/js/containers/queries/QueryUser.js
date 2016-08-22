import React, { Component } from 'react'
import { connect } from 'react-redux'
import { USER_GET_USER } from '../../actions'

class QueryUser extends Component {
  render () {
    return <noscript/>
  }

  /******************************** COMPONENT LIFECYCLE ********************************/
  componentWillMount () {
    this.request(this.props)
  }

  /******************************** CUSTOM METHODS ********************************/
  request (props) {
    const { fetchUser } = props
    fetchUser() // fetch all academies
  }
}

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({
  fetchUser: () => dispatch({ type: USER_GET_USER })
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QueryUser)