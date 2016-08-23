import React from 'react'

const Inscription = () => (
<div className="Inscription">

	<div className="container">
		<div className="row">
				<div className="col m8 s8 l8 offset-s2 offset-m2 offset-l2">
			<form action="" method="POST">

					<div className="row">
						<div className="col s6">
							<h2>Inscription</h2>		
						</div>
						<div className="col s6 right-align">
							<a href="page-sign-in.html">Se connecter</a> / Inscription
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
								<label htmlFor="firstname" className="">Prénom</label>
							</div>
					<div className="input-field col m12">
						<i className="fa fa-home prefix"></i> 
						<input id="society" type="text"/>
						<label htmlFor="society" className="">Société</label>
					</div> 
					<div className="input-field col m12">
						<i className="fa fa-phone prefix"></i> 
						<input id="tel" type="tel"/>
						<label htmlFor="tel" className="">Téléphone</label>
					</div>  
					<div className="input-field col m12">
						<i className="fa fa-envelope prefix"></i> 
						<input id="email" type="email"/>
						<label htmlFor="email" className="">Email</label>
					</div>  
					<div className="input-field col m12">
						<i className="fa fa-unlock-alt prefix"></i> 
						<input id="password" type="password"/>
						<label htmlFor="password" className="">Mot de passe</label>
					</div> 

					<p>
					<input type="checkbox" id="checkbox_terms"/>
					<label htmlFor="checkbox_terms">Acceptez les Conditions d’utilisation, la Politique de confidentialité et la Politique relative aux cookies.
					</label>
					</p>
					<button className="col s12 m12 l12 waves-effect waves-light btn-large z-depth-0 z-depth-1-hover">Inscription</button></div>

			</form>
			
				</div>

		</div>
	</div>

</div>

)

export default Inscription