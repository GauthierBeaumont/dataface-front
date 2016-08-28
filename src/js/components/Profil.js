import React, { Component } from 'react'
import $ from 'jquery'

class Profil extends Component{
   constructor(props){
      super(props)
      this.state = { name: 'Beaumont', prenom: 'Gauthier' }

   }

   render() {
      return (
         <div className="Profil">
          <div className="container">
            <div className="content">
               <div className="row">

                  <div className="col m8 s8 l8 offset-s2 offset-m2 offset-l2">
                     <form action="" method="POST">
                        <div className="row">
                           <div className="col s12 center-align">      
                              <h2>Profil de { this.state.name } { this.state.prenom }</h2>
                           </div>
                        </div>
                        <div className="card-panel clearfix">
                           <div className="input-field col m6">
                              <i className="fa fa-user prefix"></i>
                              <input id="lastname" type="text"/>
                              <label htmlFor="lastname" className="">Nom</label>
                           </div>
                           <div className="input-field col m6">
                              <input id="firstname" type="text"/>
                              <label htmlFor="firstname" className="">Prenom</label>
                           </div>
                           <div className="input-field col m6">
                              <i className="fa fa-user prefix"></i>
                              <input id="address" type="text"/>
                              <label htmlFor="address" className="">Adresse</label>
                           </div>
                           <div className="input-field col m6">
                              <input id="country" type="text"/>
                              <label htmlFor="country" className="">Ville</label>
                           </div>
                           <div className="input-field col m12">
                              <i className="fa fa-home prefix"></i>
                              <input id="postal_code" type="text"/>
                              <label htmlFor="postal_code" className="">Code postal</label>
                           </div>
                           <div className="input-field col m12">
                              <i className="fa fa-phone prefix"></i>
                              <input id="phone" type="text"/>
                              <label htmlFor="phone" className="">Téléphone</label>
                           </div>
                           <div className="input-field col m12">
                              <i className="fa fa-envelope prefix"></i>
                              <input id="email" type="text"/>
                              <label htmlFor="email" className="">Email</label>
                           </div>
                           <div className="input-field col m12">
                              <i className="fa fa-unlock-alt prefix"></i>
                              <input id="password" type="text"/>
                              <label htmlFor="password" className="">Mot de passe</label>
                           </div>

                           <div className="row">
                              <div className="col m12 center-align">
                                 <a className="btn" onClick={(e) => this.updateProfile(e)}>Update</a>
                                 <a className="btn red" onClick={(e) => this.deleteProfile(e)}>Delete</a>
                              </div>
                           </div>
                        </div>
                     </form>
                  </div>

               </div>
            </div>
         </div>
        </div>
      )
   }

   updateProfile(e){

      e.preventDefault();

      var lastname = $('#lastname').val();
      var firstname = $('#firstname').val();
      var email = $('#email').val();
      var password = $('#password').val();
      var address = $('#address').val();
      var country = $('#country').val();
      var phone = $('#phone').val();
      var postal_code = $('#postal_code').val();

      this.setState({name: lastname })
   }

   deleteProfile(e){ 
      e.preventDefault();
   }

}

export default Profil