import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

//Components
import Wrapper from './components/Wrapper'
import Dashboard from './containers/Dashboard'
import Connexion from './components/Connexion'
import Inscription from './containers/Inscription'
import Abonnements from './components/Abonnements'
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
import Index from './components/Index'
import FAQ from './components/FAQ'

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
          <Route path='abonnements' component={Abonnements}/>
          <Route path='profil' component={Profil}/>
          <Route path='applications' component={Applications}/>
          <Route path='applications/add' component={AddApplication}/>
          <Route path='applications/:applicationId/table' component={Table}/>
          <Route path='applications/:applicationId/table/:tableId' component={ListTable}/>
          <Route path='applications/:applicationId/update/' component={UpdateApplication}/>
        </Route>
        <Route path='inscription' component={Inscription}/>
        <Route path='profil' component={Profil}/>
        <Route path='FAQ' component={FAQ}/>
      </Route>
    </Route>
  </Router>
)

export default App
