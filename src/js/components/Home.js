import React, { Component } from 'react'
import Router from 'react-router'

//Components
import Input from './commons/Input'

class Home extends Component{
  constructor(props, context){
    super(props)
    this.state = { internError: '' }
    context.router
  }

  render () {
    const { loading, error } = this.props
    const { internError } = this.state

    return (
      <div className="Home">
      	<header className="Home_header">
      		<a href="#"><img src="dist/images/home/logo-dataface-blanc.png" className="Logo"/></a>
      		<div className="Nav">
      			<a className="btn" href="#">Produit</a>
      			<a className="btn" href="#">Essai gratuit</a>
      		</div>
      	</header>
        <div className="Home_body">
          <div className="Home_form_and_text">
            <form className="Home_form">
              <div className="Home_form_connexion">
                {
                  error || internError
                    ? <div className="alert alert-border-left">
                        <strong>{ internError || error }</strong>
                      </div>
                    : <noscript/>
                }
                <Input type="text" id="Login_email" label="E-mail" className="Login_email"/>
                <Input type="password" id="Login_password" label="Mot de passe" className="Login_password"/>
                <button className="waves-effect waves-dark btn light-green" disabled={ loading } href="#" onClick={(e) => this.login(e)}>{ loading ? 'Connexion ...' : 'Connexion' }</button>
              </div>
              <div className="Home_form_inscription">
                <a className="Login_subscribe_text" href="#">Pas encore inscrit ?</a>
                <a className="waves-effect waves-dark btn teal" href="/#/inscription">Inscription</a>
              </div>
            </form>
            <p className="Home_body_text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="Home_footer">
      <a className="Home_footer_link" href="/#/mentions-legales">Mentions légales</a>
      <a className="Home_footer_link" href="/#/confidentialite">Confidentialité</a>
        </div>
      </div>
    )
  }

  componentWillMount() {
    //If the user is logged, directly redirect to dashboard
    if (this.props.user) this.context.router.push('/dashboard')
  }

  componentWillReceiveProps(nextProps) {
    //When we receive the user, redicect to dashboard
    if (!this.props.user && nextProps.user) {
      this.context.router.push('/dashboard')
    }
  }

  login (e) {
    e.preventDefault()
    const email = document.querySelector('#Login_email').value
    const password = document.querySelector('#Login_password').value
    if (!email || !password) {
      this.setState({ internError: 'Veuillez remplir tous les champs' })
    } else {
      const { login } = this.props
      this.setState({ internError: '' })
      login(email, password)
    }
  }
}

Home.contextTypes = {
  router: React.PropTypes.object
}

export default Home
