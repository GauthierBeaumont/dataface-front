import React from 'react'
import Header from './commons/Header'

const Connexion = () => (
  <div className="Connexion">
  	<Header/>
	<body>
		<div className="container">
			<div className="row">
				<div className="card-panel col s12 m12 l6 offset-l3">

				    <h2 className="title center">Connexion</h2>

					<form action="#!">

						<div className="col s12 m10 l10 offset-m1 offset-l1">
							<div className="input-field">
								<i className="fa fa-user prefix"></i>
							  <input id="useremail-input" type="text" name="useremail"/>
							  <label htmlFor="useremail-input">Email</label>
							</div>
							 
							<div className="input-field">
								<i className="fa fa-unlock-alt prefix"></i>
							  <input id="password-input" type="password" name="password"/>
							  <label htmlFor="password-input">Mot de passe</label>
							</div>
							  
							 					 
							<button className="waves-effect btn col s12 m12 l12">Connexion</button>
							<hr/>

							<div className="center form-footer">
							  <a href="#">Inscription | </a> 
							  <a href="#">Mot de passe oublié ?</a>
							</div>
						</div>

					</form>
				</div>	
			</div>	
		</div>	
	</body>			
  </div>
)

export default Connexion