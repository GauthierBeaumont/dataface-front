import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

//Components
import Wrapper from './components/Wrapper'
import Dashboard from './components/Dashboard'
import Home from './components/Home'

const App = ({ history }) => (
  <Router history={browserHistory}>
    <Route path='/'>
      <Route component={Wrapper}>
        <IndexRoute component={Home}/>
        <Route path='dashboard' component={Dashboard}/>
      </Route>
    </Route>
  </Router>
)

export default App