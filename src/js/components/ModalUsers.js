import React, { Component } from 'react';

export default class ModalUsers extends Component {
  render() {
    return (
      <div id="modalusers"  onClick={ (e) => {
        if (e.target.id === e.currentTarget.id) this.props.closemodal(e)
      }}>
        <div className="modal-content flow-text">
            <form action="" method="POST" id="user-form">
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

                  <div className="modal-footer">
                    <a href="#!" className="modal-action modal-close waves-effect waves-red btn-flat ">Disagree</a>
                    <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat ">Agree</a>
                  </div>
              </div>
          </form>
      </div>
    );
  }
}
