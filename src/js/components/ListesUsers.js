import React, { Component } from 'react'

class ListeUsers extends Component{
    constructor(props){
      super(props);
      this.state = {admin: 1}
    }
   render() {
      const user = this.props.user
      return (
         <ul className="collapsible popout" data-collapsible="accordion">
            <li>
               <div className="collapsible-header">
                  {user.user}
                  {
                     this.state.admin
                        ? <i className="fa fa-times" aria-hidden="true" onClick={ () => this.deleteUser() }></i>
                        : <noscript/>
                  }
               </div>

               <div className="collapsible-body paddingCollapsibleBody">
                  <table className="responsive-table">
                     <thead>
                         <tr>
                             <th data-field="name">Name</th>
                             <th data-field="id_docker">Id Docker</th>
                             <th data-field="status">Status</th>
                             <th data-field="dt_create">Date de création</th>
                         </tr>
                     </thead>

                     <tbody>
                        {
                           user.applications.map(function(application, i){
                              return <tr key={i}>
                              <td>{application.name}</td>
                              <td>{application.id_docker}</td>
                              <td>{application.status}</td>
                              <td>{application.dt_creation}</td>
                              </tr>
                           })
                        }
                     </tbody>
                  </table>

               </div>
            </li>
         </ul>
      )
   }



   deleteUser(){

   }


}

export default ListeUsers
