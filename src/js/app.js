import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

//Components
import Wrapper from './components/Wrapper'
import Dashboard from './components/Dashboard'
import Connexion from './components/Connexion'
import Home from './components/Home'
import Test from './containers/test'
import Inscription from './components/Inscription'
import Abonnements from './components/Abonnements'
import Profil from './components/Profil'
import Applications from './components/Applications'

const App = ({ history }) => (
  <Router history={history}>
    <Route path='/'>
      <IndexRoute component={Home}/>
      <Route component={Wrapper}>
        <Route path='test' component={Test}/>
        <Route path='connexion' component={Connexion}/>
        <Route path='dashboard' component={Dashboard}>
                  <Route path='abonnements' component={Abonnements}/>
                  <Route path='profil' component={Profil}/>
                  <Route path='applications' component={Applications}/>
        </Route>
        <Route path='inscription' component={Inscription}/>
      </Route>
    </Route>
  </Router>
)

export default App
