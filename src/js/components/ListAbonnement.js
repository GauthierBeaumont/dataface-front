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
              <a className="modal-action modal-close waves-effect waves-green btn-flat btn green" style={{ color: '#FFF', marginRight: 10 }}>Mettre à jour</a>
              <a href="#!" className="modal-action modal-close waves-effect waves-red btn-flat btn red" style={{ color: '#FFF' }}>Supprmier</a>

           </td>
         </tr>
      )
   }



   deleteUser(){

   }


}

export default ListAbonnement
