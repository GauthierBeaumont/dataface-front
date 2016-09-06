import React, { Component } from 'react'
import ListesUsers from './ListesUsers'
import ModalUsers from './ModalUsers'
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
              ],
              displaymodaladduser:false,
              btnadduser:true,
            },
         ]
      }
   }

   render() {
      var self = this;
      return (
         <div className="Users">
             <div className="container">
               <div className="content">
                  <div className="row">
                     <div className="col m12 s12 l12 ">
                        <div className="row title">
                           <div className="col m2 l2 s2 left-align adduser" onClick={(e) => self.openmodaladduser(e)}>
                             <a className="btn-floating btn-large waves-effect waves-light red"  ><i className="material-icons">add</i></a>
                           </div>
                           <div className="col s10 m10 l10 center-align">
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
            {
                  this.state.displaymodaladduser
                       ?   <ModalUsers closemodaladduser={(e) => self.closemodaladduser(e)} />
                       :   <noscript/>
               }
        </div>
      )
   }

      openmodaladduser(e, ){
        e.preventDefault()
        $('.adduser').hide()
        this.setState({displaymodaladduser:true,btnadduser:false})

    }
    closemodaladduser(e){
        e.preventDefault()
        $('.adduser').show()
        this.setState({displaymodaladduser:false})
    }

}

export default Users
