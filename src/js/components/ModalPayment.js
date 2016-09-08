import React, { Component } from 'react'
import ErrorMessage from './commons/ErrorMessage'
import SuccessMessage from './commons/SuccessMessage'
import { validateCardNumber } from '../utils/cardNumber'

const defaultErrorState = {
   card_no: null, 
   cvc: null, 
   expiration_month: null, 
   expiration_year: null
}

export default class ModalPayment extends Component {
  constructor(props){
    super(props)
    this.state = {
      errors: defaultErrorState
    }
  }

  render() {
    const {card_no, cvc, expiration_month, expiration_year} = this.state.errors
    const {abonnementchoise, status, message} = this.props

    return (
      <div id="modalpayement"  onClick={ (e) => {
        if (e.target.id === e.currentTarget.id) this.props.closemodal(e)
      }}>
        <div className="modal-content flow-text">
            {
              status === 'success'
                ? <SuccessMessage message={message}/>
                : <noscript/>
            }
            { status === 'error' ? <ErrorMessage message={message}/> : <noscript/> }
            <form action="" method="POST" id="payment-form" onSubmit={(e) => this.submit(e, abonnementchoise)}>
              <img src="dist/images/logo-dataface-noir.png" className="Logo"/>
              <span className="payment-errors"></span>
              <div  className="">
                <div className="">
                    <h4>Abonnement Choisi</h4>
                    <div>Type: {abonnementchoise.name.toUpperCase()}<br/>
                      <div dangerouslySetInnerHTML={{ __html: abonnementchoise.description }}/>
                    </div>
                </div>
              </div>

              <div  className="">
                <div className="">
                  { card_no ? <ErrorMessage message={card_no}/> : <noscript/> }
                  <label>
                    <span>Card Number</span>
                    <i className="material-icons prefix">credit-card</i>
                    <input type="text" size="20" data-stripe="number" id="card_no"/>
                  </label>
                </div>
              </div>
              <div  className="">
              { expiration_month ? <ErrorMessage message={expiration_month}/> : <noscript/> }
              { expiration_year ? <ErrorMessage message={expiration_year}/> : <noscript/> }
              <label>
                <span>Expiration (MM/YY)</span>
              </label>
                <div className="row">
                  <input className="col l4 m4 s4" type="text" size="2" data-stripe="exp_month" id="expiration_month"/>
                  <span className="col l4 m4 s4"> / </span>
                  <input className="col l4 m4 s4" type="text" size="2" data-stripe="exp_year" id="expiration_year"/>
                </div>
                <div className="">
                  { cvc ? <ErrorMessage message={cvc}/> : <noscript/> }
                  <label>
                    <span>CVC</span>
                    <input type="text" size="4" data-stripe="cvc" id="cvc"/>
                  </label>
                </div>
              </div>
              <button className="submit btn" onClick={(e) => this.submit(e, abonnementchoise)}>Payer</button>
            </form>
        </div>
    </div>
    )
  }

  submit(e, abonnementchoise){
    e.preventDefault()
    let errors = { ...defaultErrorState }
    let hasError = false

    const card_no = document.querySelector('#card_no').value
    const cvc = document.querySelector('#cvc').value
    const expiration_month = document.querySelector('#expiration_month').value
    const expiration_year = document.querySelector('#expiration_year').value

    console.log(cvc)

    if (!card_no || !validateCardNumber(card_no)) {
       errors.card_no = 'Veuillez saisir numéro de carte banquaire correct'
       hasError = true
    }
    if (!cvc || isNaN(cvc)) {
      console.log(isNaN(cvc))
       errors.cvc = 'Veuillez saisir un CVC correct (les 3 chiffres au dos de votre carte)'
       hasError = true
    }
    if (!expiration_month || isNaN(expiration_month)) {
       errors.expiration_month = 'Veuillez saisir le mois d\'expiration de votre carte'
       hasError = true
    }
    if (!expiration_year || isNaN(expiration_year)) {
       errors.expiration_year = 'Veuillez saisir l\'année d\'expiration de votre carte'
       hasError = true
    }

    this.setState({errors})

    if (!hasError){
      this.props.addAbonnement({card_no, cvc, expiration_month, expiration_year, abonnementId: abonnementchoise.id, amount: abonnementchoise.price})
    }
  }
}
