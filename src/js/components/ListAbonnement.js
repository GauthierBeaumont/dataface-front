import React, { Component } from 'react'

class ListAbonnement extends Component{
    constructor(props){
      super(props);
      this.state = {admin: 1}
    }
   render() {
      const abonnement = this.props.abonnement
      return (
         <tr>
           <td>{abonnement.name}</td>
           <td>{abonnement.price}</td>
           <td>{abonnement.duration}</td>
           <td>{abonnement.order}</td>
           <td className="">
              <a className="modal-action modal-close waves-effect waves-green btn-flat ">Update</a>
              <a href="#!" className="modal-action modal-close waves-effect waves-red btn-flat ">Delete</a>

           </td>
         </tr>
      )
   }



   deleteUser(){

   }


}

export default ListAbonnement
