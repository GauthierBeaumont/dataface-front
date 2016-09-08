import React, { Component } from 'react'
import ErrorMessage from './commons/ErrorMessage'
import { validateEmail } from '../utils/email'

const defaultErrorState = {
   firstName: null, 
   lastName: null, 
   address: null, 
   country: null, 
   postalCode: null, 
   phone: null, 
   email: null, 
   password: null,
   password_confirmation: null,
   checkbox_terms: null
}

class Inscription extends Component{
   constructor(props){
      super(props)
      this.state = {
         errors: defaultErrorState
      }
   }

   render() {
      const { firstName, lastName, address, country, postalCode, phone, email, password, password_confirmation, checkbox_terms } = this.state.errors
      const { status, registerError } = this.props

      return (
         <div className="Inscription">
            <div className="container">
               <div className="row">
                  <div className="col m8 s8 l8 offset-s2 offset-m2 offset-l2">
                     <form onSubmit={(e) => this.submit(e)}>

                           <div className="row">
                              <div className="col s6">
                                 <h2>Inscription</h2>
                              </div>
                              <div className="col s6 right-align">
                                 <a href="/#/">Se connecter</a> / Inscription
                              </div>
                           </div>

                           <div className="card-panel clearfix">
                                 { registerError ? <ErrorMessage message={registerError}/> : <noscript/> }
                                 { lastName ? <ErrorMessage message={lastName}/> : <noscript/> }
                                 { firstName ? <ErrorMessage message={firstName}/> : <noscript/> }
                                 <div className="input-field col m6">
                                    <i className="fa fa-user prefix"></i>
                                    <input id="lastName" name="lastName" type="text"/>
                                    <label htmlFor="lastName" className="">Nom</label>
                                 </div>
                                 <div className="input-field col m6">
                                    <input id="firstName" name="firstName" type="text"/>
                                    <label htmlFor="firstName" className="">Prénom</label>
                                 </div>
                                 { address ? <ErrorMessage message={address}/> : <noscript/> }
                                 { country ? <ErrorMessage message={country}/> : <noscript/> }
                                 { postalCode ? <ErrorMessage message={postalCode}/> : <noscript/> }
                                 <div className="input-field col m5">
                                    <i className="fa fa-home prefix"></i>
                                    <input id="address" name="address" type="text"/>
                                    <label htmlFor="address" className="">Adresse</label>
                                 </div>
                                 <div className="input-field col m5">
                                    <input id="country" name="country" type="text"/>
                                    <label htmlFor="country" className="">Pays</label>
                                 </div>
                                 <div className="input-field col m2">
                                    <input id="postalCode" name="postalCode" type="text"/>
                                    <label htmlFor="postalCode" className="">Code postal</label>
                                 </div>

                           { phone ? <ErrorMessage message={phone}/> : <noscript/> }
                           <div className="input-field col m12">
                              <i className="fa fa-phone prefix"></i>
                              <input id="phone" name="phone" type="tel"/>
                              <label htmlFor="phone" className="">Téléphone</label>
                           </div>
                           { email ? <ErrorMessage message={email}/> : <noscript/> }
                           <div className="input-field col m12">
                              <i className="fa fa-envelope prefix"></i>
                              <input id="email" name="email" type="email"/>
                              <label htmlFor="email" className="">Email</label>
                           </div>
                           { password ? <ErrorMessage message={password}/> : <noscript/> }
                           <div className="input-field col m12">
                              <i className="fa fa-unlock-alt prefix"></i>
                              <input id="password" name="password" type="password"/>
                              <label htmlFor="password" className="">Mot de passe</label>
                           </div>

                           { password_confirmation ? <ErrorMessage message={password_confirmation}/> : <noscript/> }
                           <div className="input-field col m12">
                              <i className="fa fa-unlock-alt prefix"></i>
                              <input id="password_confirmation" name="password_confirmation" type="password"/>
                              <label htmlFor="password_confirmation" className="">Confirmation mot de passe</label>
                           </div>

                           { checkbox_terms ? <ErrorMessage message={checkbox_terms}/> : <noscript/> }
                           <p>
                           <input type="checkbox" id="checkbox_terms"/>
                           <label htmlFor="checkbox_terms">Acceptez les Conditions d’utilisation.
                           </label>
                           </p>
                           <button disabled={ status === 'loading' } className="col s12 m12 l12 waves-effect waves-light btn-large z-depth-0 z-depth-1-hover" onClick={(e) => this.submit(e)}>
                              { status === 'loading' ? 'Inscription en cours ...' : 'Inscription' }
                           </button>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      )
   }

   componentWillReceiveProps(nextProps) {
      if (nextProps.user && !this.props.user) this.context.router.push('/dashboard')
   }

   submit(e){
      e.preventDefault()
      let errors = { ...defaultErrorState }
      let hasError = false

      const firstName = document.querySelector('#firstName').value
      const lastName = document.querySelector('#lastName').value
      const address = document.querySelector('#address').value
      const country = document.querySelector('#country').value
      const postalCode = document.querySelector('#postalCode').value
      const phone = document.querySelector('#phone').value
      const email = document.querySelector('#email').value
      const password = document.querySelector('#password').value
      const password_confirmation = document.querySelector('#password_confirmation').value
      const checkbox_terms = document.querySelector('#checkbox_terms:checked')

      if (!firstName) {
         errors.firstName = 'Veuillez saisir un prenom correct'
         hasError = true
      }
      if (!lastName) {
         errors.lastName = 'Veuillez saisir un nom correct'
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
      if (!postalCode) {
         errors.postalCode = 'Veuillez saisir un code postal correct'
         hasError = true
      }
      if (!phone) {
         errors.phone = 'Veuillez saisir un téléphone correct'
         hasError = true
      }
      if (!email || !validateEmail(email)) {
         errors.email = 'Veuillez saisir une adresse email correcte'
         hasError = true
      }
      if (!password) {
         errors.password = 'Veuillez saisir un mot de passe correct'
         hasError = true
      }else if (password.length < 6) {
         errors.password = 'Veuillez saisir mot de passe d\'au moins 6 caracteres'
         hasError = true
      }
      if (password_confirmation !== password) {
         errors.password_confirmation = 'Le mot de passe de confirmation dois etre identique au mot de passe.'
         hasError = true
      }
      if (!checkbox_terms) {
         errors.checkbox_terms = 'Merci d\'accepter les conditions d\'utilisation'
         hasError = true
      }

      this.setState({errors})

      if (!hasError){
         this.props.register({firstName, lastName, address, country, postalCode, phone, email, password, password_confirmation})
      }
   }
}

Inscription.contextTypes = {
  router: React.PropTypes.object
}

export default Inscription
