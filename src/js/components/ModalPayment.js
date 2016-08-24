import React, { Component } from 'react';

const HoverActionStyles = {
    normal: {
        zIndex:'1003',
        opacity: '0',
        transform: 'scaleX(0.7)',
        top: '583.519px'        
    }
};

export default class ModalPayment extends Component {
  render() {
    return (
      <div id="modalpayement"  style ={HoverActionStyles.normal}>
        <div className="modal-content flow-text">
            <form action="" method="POST" id="payment-form">
              <span className="payment-errors"></span>

              <div className="form-row">
                <label>
                  <span>Card Number</span>
                  <input type="text" size="20" data-stripe="number"/>   
                </label>
              </div>
              <div className="form-row">
                <label>
                  <span>Expiration (MM/YY)</span>
                  <input type="text" size="2" data-stripe="exp_month"/>
                </label>
                <span> / </span>
                <input type="text" size="2" data-stripe="exp_year"/>
              </div>
              <div className="form-row">
                <label>
                  <span>CVC</span>
                  <input type="text" size="4" data-stripe="cvc"/>
                </label>
              </div>
              <input type="submit" className="submit" value="Submit Payment"/>
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
