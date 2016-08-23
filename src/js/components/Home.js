import React, { Component } from 'react'

//Components
import Input from './commons/Input'

class Home extends Component{
  
  render () {
    return (
      <div className="Home">
      	<header className="Home_header">
      		<img src="dist/images/home/logo-dataface-blanc.png" className="Logo"/>
      		<div className="Nav">
      			<a className="btn" href="#">Produit</a>
      			<a className="btn" href="#">Essai gratuit</a>
      		</div>
      	</header>
        <div className="Home_body">
          <div className="Home_form_and_text">
            <form className="Home_form">
              <div className="Home_form_connexion">
                <Input type="text" id="Login_email" label="E-mail" className="Login_email"/>
                <Input type="password" id="Login_password" label="Mot de passe" className="Login_password"/>
                <button className="waves-effect waves-dark btn indigo" href="#" onClick={(e) => this.login(e)}>Connexion</button>
              </div>
              <div className="Home_form_inscription">
                <a className="Login_subscribe_text" href="#">Pas encore inscrit ?</a>
                <a className="waves-effect waves-dark btn green" href="/#/inscription">Inscription</a>
              </div>
            </form>
            <p className="Home_body_text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </p>
          </div>
        </div>
        <div className="Home_footer">
          <a className="Home_footer_link" href="#">Mentions légales</a>
          <a className="Home_footer_link" href="#">Confidentialité</a>
        </div>
      </div>
    )
  }

  login (e) {
    e.preventDefault()
    const { login } = this.props
    const email = document.querySelector('#Login_email').value
    const password = document.querySelector('#Login_password').value
    login(email, password)
  }
}

export default Home