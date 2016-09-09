import React from 'react'
import ErrorMessage from './commons/ErrorMessage'
import SuccessMessage from './commons/SuccessMessage'

const Applications = ({ applications, status, message, abonnement }) => {
  if (!abonnement) return (
    <div className="card-panel">
      <h2 style={{ display: 'inline-block', verticalAlign: 'middle' }}>Applications</h2>
      <ErrorMessage message="<div>Pour creer des applications il vous faut un abonnement. <br/><a href='/#/dashboard/abonnement'>Souscrire à un abonnement.</a></div>"/>
    </div>
  )
  return (
    <div className="Applications card-panel">
      <div className="col s10 m10  ">
        <h2 style={{ display: 'inline-block', verticalAlign: 'middle' }}>Applications</h2>
        <a
          style={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: 30 }}
          href="/#/dashboard/applications/add"
          className="btn-floating btn-large waves-effect waves-light red"
        >
          <i className="material-icons">add</i>
        </a>
      </div>
      {
        status === 'loading'
          ? <div className="Loader">

              <img src="dist/images/hourglass.svg"/>
            </div>
          : applications.length
              ? <div>
                  { getMessage(status, message) }
                  <Table applications={ applications } />
                </div>
              : <div style={{ padding: 20, textAlign: 'center', fontSize: 16 }}>Aucune applications.</div>
      }
    </div>
  )
}

const getMessage = (status, message) => {
  if (status === 'error') return <ErrorMessage message={message}/>
  if (status === 'success') return <SuccessMessage message={message}/>
  return <noscript/>
}

const Table = ({ applications }) => (
  <table className="bordered">
    <thead>
      <tr>
          <th data-field="name">Nom</th>
          <th data-field="description">Description</th>
          <th data-field="created_at">Date de création</th>
      </tr>
    </thead>

    <tbody>
      { applications.map((application, i) => <Tr key={ i } application={ application }/>) }
    </tbody>
  </table>
)

const Tr = ({ application }) => (
  <tr>
    <td> <a href="/#/dashboard/applications/1">{ application.name }</a></td>
    <td>{ application.description }</td>
    <td>{ applications.created_at }</td>
    <td>
      <a href="/#/dashboard/applications/table " className="waves-effect btn-floating btn-large red">
        <i className="large material-icons">view_list</i>
      </a>
      <a href="/#/dashboard/applications/update/1 " className="waves-effect btn-floating btn-large red">
       <i className="large material-icons">mode_edit</i>
      </a>
      <a className="waves-effect btn-floating btn-large buttonDelete red">
       <i className="large material-icons">delete</i>
      </a>
    </td>
  </tr>
)

export default Applications
