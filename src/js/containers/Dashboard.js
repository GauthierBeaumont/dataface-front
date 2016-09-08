import React, { Component } from 'react'
import { connect } from 'react-redux'
import Home from '../components/Home'
import { USER_LOGOUT } from '../actions'
import DashboardComponent from '../components/Dashboard'

import { getUser } from '../selectors/user'
import { getCookie } from '../utils/cookie'

class Dashboard extends Component {
  render() {
  	const { user, children, ...props } = this.props
    if (!user) return <noscript/>
    return (
      <DashboardComponent { ...props }>
        { children }
      </DashboardComponent>
    )
  }

  componentWillMount() {
  	if (!getCookie('dataface-user-id')) this.context.router.push('/')
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.user && this.props.user) this.context.router.push('/')
  }
}

Dashboard.contextTypes = {
  router: React.PropTypes.object
}

const mapStateToProps = state => ({
  user: getUser(state)
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch({ type: USER_LOGOUT })
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
