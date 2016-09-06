import React from 'react'
const AddApplication = () => (
	<div className="AddApplication">

				<div className="col m10 s10 l10">
					<form action="" method="POST">

							<div className="row">
								<div className="col s6">
									<h2>Ajouter une application</h2>
								</div>
								<div className="col s6 right-align">

									<a href="/#/dashboard/applications" className="waves-effect waves-light btn red"><i className="fa fa-arrow-left" aria-hidden="true"></i> Retour</a>
								</div>
							</div>

							<div className="card-panel clearfix">


							<div className="input-field col m12">
								<input id="name" name="name" type="tel"/>
								<label htmlFor="name" className="">Nom</label>
							</div>
							<div className="input-field col m12">
								<textarea id="decription" name="decription" className="materialize-textarea"></textarea>	
								<label htmlFor="decription" className="">Description</label>
							</div>

							<button className="col s12 m12 l12 waves-effect waves-light btn-large z-depth-0 z-depth-1-hover">Enregistrer</button></div>

					</form>
				</div>





	</div>
)	
export default AddApplication
