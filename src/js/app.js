import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

//Components
import Wrapper from './components/Wrapper'
import Dashboard from './containers/Dashboard'
import Connexion from './components/Connexion'
import Inscription from './containers/Inscription'
import Profil from './containers/Profil'
import Applications from './containers/Applications'
import AddApplication from './containers/AddApplication'
import Table from './components/Table'
import ListTable from './components/ListTable'
import UpdateApplication from './components/UpdateApplication'
import Produit from './components/Produit'
import Confidentialite from './components/Confidentialite'
import Mentions from './components/Mentions'
import Home from './containers/Home'
import Test from './containers/test'
import Abonnement from './containers/Abonnement'
import Index from './components/Index'
import Users from './components/Users'
import FAQ from './components/FAQ'
import AdminDocker from './components/AdminDocker'
import Administration from './components/Administration'

const App = ({ history }) => (
  <Router history={history}>
    <Route path='/' components={Index}>
      <IndexRoute component={Home}/>
      <Route component={Wrapper}>
        <Route path='test' component={Test}/>
        <Route path='connexion' component={Connexion}/>
        <Route path='produits' component={Produit}/>
        <Route path='confidentialite' component={Confidentialite}/>
        <Route path='mentions-legales' component={Mentions}/>
        <Route path='dashboard' component={Dashboard}>
          <Route path='FAQ' component={FAQ}/>
          <Route path='abonnement' component={Abonnement}/>
          <Route path='profil' component={Profil}/>
          <Route path='applications' component={Applications}/>
          <Route path='utilisateurs' component={Users}/>
          <Route path='applications/add' component={AddApplication}/>
          <Route path='applications/:applicationId/table' component={Table}/>
          <Route path='applications/:applicationId/table/:tableId' component={ListTable}/>
          <Route path='applications/:applicationId/update/' component={UpdateApplication}/>
          <Route path='docker' component={AdminDocker}/>
          <Route path='administration' component={Administration}/>
        </Route>
        <Route path='inscription' component={Inscription}/>
        <Route path='profil' component={Profil}/>
      </Route>
    </Route>
  </Router>
)

export default App
