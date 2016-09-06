import React, { Component } from 'react'
import ListesUsers from './ListesUsers'
import $ from 'jquery'

class Users extends Component{
   constructor(props){
      super(props)
      this.state = {
         users: [
            { user: 'User 1',
              status: "free",
              dt_creation:"2015-06-08",
              status_facture:"2015-06-08",
              applications:[
                 { name:"application 1",
                   id_docker:"qsDqsdqsD18",
                   status : "en ligne",
                   dt_creation: "2015-06-08"
                 },
                 { name:"application 2",
                   id_docker:"qsDqsdqsD18",
                   status : "en ligne",
                   dt_creation: "2015-06-08"
                 },
                 { name:"application 3",
                   iid_docker:"qsDqsdqsD18",
                   status : "en ligne",
                   dt_creation: "2015-06-08"
                 }
              ]

            },
            { user: 'User 2',
              status: "free",
              dt_creation:"2015-06-08",
              status_facture:"2015-06-08",
              applications:[
                 { name:"application 1",
                   id_docker:"qsDqsdqsD18",
                   status : "en ligne",
                   dt_creation: "2015-06-08"
                 },
                 { name:"application 2",
                   id_docker:"qsDqsdqsD18",
                   status : "en ligne",
                   dt_creation: "2015-06-08"
                 },
                 { name:"application 3",
                   iid_docker:"qsDqsdqsD18",
                   status : "en ligne",
                   dt_creation: "2015-06-08"
                 }
              ]
            },
            { user: 'User 3',
              status: "free",
              dt_creation:"2015-06-08",
              status_facture:"2015-06-08",
              applications:[
                 { name:"application 1",
                   id_docker:"qsDqsdqsD18",
                   status : "en ligne",
                   dt_creation: "2015-06-08"
                 },
                 { name:"application 2",
                   id_docker:"qsDqsdqsD18",
                   status : "en ligne",
                   dt_creation: "2015-06-08"
                 },
                 { name:"application 3",
                   iid_docker:"qsDqsdqsD18",
                   status : "en ligne",
                   dt_creation: "2015-06-08"
                 }
              ]
            },
            { user: 'User 4',
              status: "free",
              dt_creation:"2015-06-08",
              status_facture:"2015-06-08",
              applications:[
                 { name:"application 1",
                   id_docker:"qsDqsdqsD18",
                   status : "en ligne",
                   dt_creation: "2015-06-08"
                 },
                 { name:"application 2",
                   id_docker:"qsDqsdqsD18",
                   status : "en ligne",
                   dt_creation: "2015-06-08"
                 },
                 { name:"application 3",
                   iid_docker:"qsDqsdqsD18",
                   status : "en ligne",
                   dt_creation: "2015-06-08"
                 }
              ]
            },
         ]
      }
   }

   render() {
      return (
         <div className="Users">
         <div className="col m10 left-align">
           <a className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">add</i></a>
         </div>
          <div className="container">
            <div className="content">
               <div className="row">
                  <div className="col m12 s12 l12 ">
                     <div className="row">
                        <div className="col s12 center-align">
                           <h2>Liste des utilisateurs</h2>
                        </div>
                     </div>
                     {
                        this.state.users.map(function(user, i){
                           return <ListesUsers key={i} user={user}/>
                        })
                     }

                  </div>
               </div>
            </div>
         </div>
        </div>
      )
   }

   createResponse(e){

      e.preventDefault();
      var titleQuestion = $('#titleQuestion').val();
      var question = $('#question').val();

   }

}

export default Users
