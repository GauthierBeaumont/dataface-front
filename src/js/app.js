import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

//Components
import Wrapper from './components/Wrapper'
import Dashboard from './components/Dashboard'
import Produit from './components/Produit'
import Home from './containers/Home'
import Test from './containers/test'
import Inscription from './components/Inscription'
import Abonnement from './components/Abonnement'

const App = ({ history }) => (
  <Router history={history}>
    <Route path='/'>
     <IndexRoute component={Home}/>
      <Route component={Wrapper}>
        <Route path='test' component={Test}/>
        <Route path='dashboard' component={Dashboard}>
            <Route path='abonnement' component={Abonnement}>
            </Route>
        </Route>
        <Route path='produits' component={Produit}/>
        <Route path='inscription' component={Inscription}/>
      </Route>
    </Route>
  </Router>
)

export default App
