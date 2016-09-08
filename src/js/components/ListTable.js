import React, { Component } from 'react'
import { last } from 'lodash'

class ListTable extends Component {
	constructor(props){
		super(props)
		this.state = {
			columns: [ { id: 0 } ]
		}
	}

	render(){
		return (
		  <div className="Table">
		  <h3>Visualiser les tables</h3>
				<form action="" method="POST">
					<div className="input-field col m11">
					<div className="col s2">
						Nom de la base de donnée :
					</div>
					<div className="col s6">
						Courses
					</div>							
					</div>		

						<table id="table" className="display table table-bordered table-hover">
							<thead>
							<tr>	
								<td>Nom de la colonne</td>
								<td>Type</td>
								<td>NULL</td>
								<td>Actions</td>
							</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										Ingrédients	
									</td>
									<td>
									Chaîne de caractère
									  
									</td>
									<td>
										<p>
											<input name="is_null" type="checkbox" id="is_null" value="" data-parsley-mincheck="2" />
											<label htmlFor="is_null"></label>
										</p>
									</td>
									<td>

									<div className="col m3 center">
										<a href="/#/dashboard/applications/table/update/1" className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons" onClick={(e) => deleteColumn(e, column.id)}>update</i></a>
									</div>
									<div className="col m3 center">
										<a href="/#/dashboard/applications/table/delete" className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons" onClick={(e) => deleteColumn(e, column.id)}>delete</i></a>
									</div>		
									</td>

								</tr>
								<tr>
									<td>
										Magasins	
									</td>
									<td>
									Chaîne de caractère
									  
									</td>
									<td>
										<p>
											<input name="is_null" type="checkbox" id="is_null" value="" data-parsley-mincheck="2" />
											<label htmlFor="is_null"></label>
										</p>
									</td>
									<td>

									<div className="col m3 center">
										<a href="/#/dashboard/applications/table/update/1" className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons" onClick={(e) => deleteColumn(e, column.id)}>update</i></a>
									</div>
									<div className="col m3 center">
										<a href="/#/dashboard/applications/table/delete" className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons" onClick={(e) => deleteColumn(e, column.id)}>delete</i></a>
									</div>		
									</td>

								</tr>	
							</tbody>
						</table>

					<div className="col s12 right-align">
					<a href="/#/dashboard/applications" className="waves-effect waves-light btn-large red"><i className="fa fa-arrow-left" aria-hidden="true"></i> Retour</a>
					
					</div>				</form>
		   </div>
		)
	}
}


export default ListTable