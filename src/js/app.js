import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

//Components
import Wrapper from './components/Wrapper'
import Dashboard from './components/Dashboard'
import Home from './components/Home'
import Produit from './components/Produit'
import Test from './containers/test'

const App = ({ history }) => (
  <Router history={history}>
    <Route path='/'>
      <Route component={Wrapper}>
        <IndexRoute component={Home}/>
        <Route path='test' component={Test}/>
        <Route path='dashboard' component={Dashboard}/>
        <Route path='produit' component={Produit}/>
      </Route>
    </Route>
  </Router>
)

export default App
