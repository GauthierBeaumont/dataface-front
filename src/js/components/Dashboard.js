import React, { Component } from 'react';

const adminNav = [
  {
    name: 'Gestion des utilisateurs',
    icon: 'users',
    link: '/#/dashboard/utilisateurs'
  },
  {
    name: 'Données Docker',
    icon: 'docker',
    link: '/#/dashboard/docker'
  },
  {
    name: 'Analytics',
    icon: 'line-chart',
    link: '/#/dashboard/analytics'
  },
  {
    name: 'Administration du site',
    icon: 'cog',
    link: '/#/dashboard/administration'
  }
]

const userNav = [
  {
    name: 'Profil',
    icon: 'user',
    link: '/#/dashboard/profil'
  },
  {
    name: 'Gestion des abonnements',
    icon: 'check-square',
    link: '/#/dashboard/abonnements'
  },
  {
    name: 'Gestion des applications',
    icon: 'list-alt',
    link: '/#/dashboard/applications'
  },
  {
    name: 'FAQ',
    icon: 'question-circle',
    link: '/#/dashboard/FAQ'
  }
]

class Dashboard extends Component {
  constructor(props) {
      super(props)
      this.state = { isAdmin: false }
  }

  render() {
    const { isAdmin } = this.state
    const nav = isAdmin ? adminNav : userNav
    return (
      <div className="Dashboard">
        <ul className="Dashboard_nav">
          <li className ="sideTitle">
            <i className="fa fa-user"/>
            <span className="Text">{ isAdmin ? 'Administrateur' : 'Services' }</span>
          </li>
          {
            nav.map((item, i) => (
              <li key={ i } className="Dashboard_nav_item">
                <a className="waves-effect waves-light" href={ item.link }>
                  <i className={ `fa fa-${item.icon}` }/>
                  <span className="Text">{ item.name }</span>
                </a>
              </li>
            ))
          }
        </ul>
        <div className="Children">
          { this.props.children }
        </div>
      </div>
    )
  }
}

export default Dashboard
