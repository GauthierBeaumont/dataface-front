import React, { Component } from 'react';



export default class ModalPayment extends Component {
  render() {
    return (
      <div id="modalpayement"  onClick={ (e) => {
        if (e.target.id === e.currentTarget.id) this.props.closemodal(e)
      }}>
        <div className="modal-content flow-text">
            <form action="" method="POST" id="payment-form">
              <img src="dist/images/logo-dataface-noir.png" className="Logo"/>
              <span className="payment-errors"></span>
              <div  className="row">
                <div className="form-row">
                    <h4>Abonnement Choisi</h4>
                    <div>Type: {this.props.abonnementchoise.name}<br/>
                      <div dangerouslySetInnerHTML={{ __html: this.props.abonnementchoise.description }}/>
                    </div>
                    <input type="hidden" data-stripe="montent" value={this.props.abonnementchoise.price}/>
                </div>
              </div>

              <div  className="row">
                <div className="form-row">
                  <label>
                    <span>Card Number</span>
                    <i className="material-icons prefix">credit-card</i>
                    <input type="text" size="20" data-stripe="number"/>
                  </label>
                </div>
              </div>
              <div  className="row">
              <label>
                <span>Expiration (MM/YY)</span>
              </label>
                <div className="form-row">

                    <input className="col l4 m4 s4" type="text" size="2" data-stripe="exp_month"/>

                  <span className="col l4 m4 s4"> / </span>
                  <input className="col l4 m4 s4" type="text" size="2" data-stripe="exp_year"/>
                </div>
                <div className="form-row">
                  <label>
                    <span>CVC</span>
                    <input type="text" size="4" data-stripe="cvc"/>
                  </label>
                </div>
              </div>
              <input type="submit" className="submit" value="Payer"/>
            </form>
        </div>
        <div className="modal-footer">
          <a href="#!" className="modal-action modal-close waves-effect waves-red btn-flat ">Disagree</a>
          <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat ">Agree</a>
        </div>
    </div>
    );
  }
}
