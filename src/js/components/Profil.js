import React, { Component } from 'react'
import $ from 'jquery'
import ErrorMessage from './commons/ErrorMessage'
import SuccessMessage from './commons/SuccessMessage'

const defaultErrorState = {
   firstname: null, 
   lastname: null, 
   address: null, 
   country: null, 
   postal_code: null, 
   phone: null, 
   email: null, 
   password: null,
   password_confirmation: null,
   checkbox_terms: null
}

class Profil extends Component{
   constructor(props) {
      super(props)
      this.state = {
         firstname: props.user.firstname || "",
         lastname: props.user.lastname || "",
         email: props.user.email || "",
         password: "",
         country: props.user.country || "",
         postal_code: props.user.postal_code || "",
         phone: props.user.phone || "",
         address: props.user.address || "",
         errors: defaultErrorState
      }
   }

   render() {
      const { firstname, lastname, address, country, postal_code, phone, email, password, password_confirmation, checkbox_terms } = this.state.errors
      return (
         <div className="Profil">
            <div className="content">
               <div className="row">

                  <div className="col m8 s8 l8 offset-s2 offset-m2 offset-l2">
                     <form action="" method="POST">
                        <div className="row">
                           { this.props.editStatus 
                              ? this.props.editStatus.type === 'success' 
                                 ? <SuccessMessage message={ this.props.editStatus.text }/> 
                                 : <ErrorMessage message={ this.props.editStatus.text }/> 
                              : <noscript/> 
                           }
                           <div className="col s12 center-align">
                              <h2>Profil de { this.props.user.lastname } { this.props.user.firstname }</h2>
                           </div>
                        </div>
                        <div className="card-panel clearfix">
                           { lastname ? <ErrorMessage message={lastname}/> : <noscript/> }
                           { firstname ? <ErrorMessage message={firstname}/> : <noscript/> }
                           <div className="input-field col m6">
                              <i className="fa fa-user prefix"></i>
                              <input id="lastname" placeholder="Nom" type="text" value={ this.state.lastname } onChange={(e) => this.setState({lastname: e.target.value})}/>
                              
                           </div>
                           <div className="input-field col m6">
                              <input id="firstname" placeholder="Prenom" type="text"  value={ this.state.firstname } onChange={(e) => this.setState({firstname: e.target.value})}/>
                              
                           </div>
                           { address ? <ErrorMessage message={address}/> : <noscript/> }
                           { country ? <ErrorMessage message={country}/> : <noscript/> }
                           <div className="input-field col m6">
                              <i className="fa fa-usre prefix"></i>
                              <input id="address" placeholder="Adresse" type="text"  value={ this.state.address } onChange={(e) => this.setState({address: e.target.value})}/>
                              
                           </div>
                           <div className="input-field col m6">
                              <input id="country" placeholder="Ville" type="text"  value={ this.state.country } onChange={(e) => this.setState({country: e.target.value})}/>
                              
                           </div>
                           { postal_code ? <ErrorMessage message={postal_code}/> : <noscript/> }
                           <div className="input-field col m12">
                              <i className="fa fa-home prefix"></i>
                              <input id="postal_ code" placeholder="Code postal" type="text" value={ this.state.postal_code } onChange={(e) => this.setState({postal_code: e.target.value})}/>
                              
                           </div>
                           { phone ? <ErrorMessage message={phone}/> : <noscript/> }
                           <div className="input-field col m12">
                              <i className="fa fa-phone prefix"></i>
                              <input id="phone" placeholder="Téléphone" name="phone" type="tel"  value={ this.state.phone } onChange={(e) => this.setState({phone: e.target.value})}/>
                              
                           </div>
                           { password ? <ErrorMessage message={password}/> : <noscript/> }
                           <div className="input-field col m12">
                              <i className="fa fa-unlock-alt prefix"></i>
                              <input id="password" placeholder="Mot de passe" type="password"  value={ this.state.password } onChange={(e) => this.setState({password: e.target.value})}/>
                              
                           </div>

                           <div className="row">
                              <div className="col m12 center-align">
                                 <a className="btn" onClick={(e) => this.updateProfile(e)} style={{marginRight: 10}}>Sauvegarder</a>
                                 <a className="btn red" onClick={(e) => this.deleteProfile(e)}>Supprimer mon compte</a>
                              </div>
                           </div>
                        </div>
                     </form>
                  </div>

               </div>
            </div>
        </div>
      )
   }

   updateProfile(e){
      e.preventDefault()
      let errors = { ...defaultErrorState }
      let hasError = false

      const firstname = document.querySelector('#firstname').value
      const lastname = document.querySelector('#lastname').value
      const address = document.querySelector('#address').value
      const country = document.querySelector('#country').value
      const postal_code = document.querySelector('#postal_code').value
      const phone = document.querySelector('#phone').value
      const password = document.querySelector('#password').value

      if (!firstname) {
         errors.firstname = 'Veuillez saisir un prenom correct'
         hasError = true
      }
      if (!lastname) {
         errors.lastname = 'Veuillez saisir un nom correct'
         hasError = true
      }
      if (!address) {
         errors.address = 'Veuillez saisir une adresse correcte'
         hasError = true
      }
      if (!country) {
         errors.country = 'Veuillez saisir une ville correcte'
         hasError = true
      }
      if (!postal_code) {
         errors.postal_code = 'Veuillez saisir un code postal correct'
         hasError = true
      }
      if (!phone) {
         errors.phone = 'Veuillez saisir un téléphone correct'
         hasError = true
      }
      if (password && password.length < 6) {
         errors.password = 'Veuillez saisir mot de passe d\'au moins 6 caracteres'
         hasError = true
      }

      this.setState({errors})

      if (!hasError){
         let user = { firstname, lastname, address, country, postal_code, phone }
         user = password ? { ...user, password } : user
         this.props.saveProfile(user)
      }
   }

   deleteProfile(e){
      e.preventDefault()
      const c = confirm("Voulez vous vraiment supprimer votre compte ? Cette action est irréverssible.")
      if (c) this.props.deleteAccount()
   }

}

export default Profil
