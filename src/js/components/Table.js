import React, { Component } from 'react'
import { last } from 'lodash'

class Table extends Component {
	constructor(props){
		super(props)
		this.state = {
			columns: [ { id: 0 } ]
		}
	}

	render(){
		return (
		  <div className="Table">
		  <h3>Créer une table</h3>

				<form action="" method="POST">
					<div className="input-field col m11">
						<input id="table_name" name="table_name" type="text"/>
						<label htmlFor="table_name" className="">Nom de la table</label>
					</div>		

					  	<div className="col m1 center">
							<a href="/#/dashboard/applications/table/add" className="btn-floating btn-large waves-effect waves-light"><i className="material-icons" onClick={(e) => {
								e.preventDefault()
								const id = last(this.state.columns) ? last(this.state.columns).id + 1 : 0
								this.setState({ columns: [ ...this.state.columns, { id } ] })
							}}>add</i></a>
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
								{ this.state.columns.map((column, i) => <Column key={ i } column={ column } deleteColumn={(e, id) => {
										e.preventDefault()
										const index = this.state.columns.findIndex(column => column.id === id)
										const newColumns = [ ...this.state.columns.slice(0, index), ...this.state.columns.slice(index + 1) ]
										if (index !== -1) this.setState({ columns: newColumns })
									}}/>) 
								}
							</tbody>
						</table>

					<div className="col s6 left-align">
					<button className="waves-effect waves-light btn-large z-depth-0 z-depth-1-hover">Enregistrer</button>
					
					</div>
					<div className="col s6 right-align">
					<a href="/#/dashboard/applications" className="waves-effect waves-light btn-large red"><i className="fa fa-arrow-left" aria-hidden="true"></i> Annuler</a>
					
					</div>					
				</form>
		   </div>
		)
	}
}

const Column = ({ column, deleteColumn }) => (
	<tr>
		<td>
			<div className="input-field">
				<label htmlFor="column_name" className=""></label>
				<input id="column_name" name="column_name" type="text"/>
			</div>		
		</td>
		<td>

		  <div className="input-field">
			<select className="browser-default" name="type">
				<option value="0" selected disabled>Type</option>
				<option value="entier">Entier</option>
				<option value="decimal">Decimal</option>
				<option value="date">Date</option>
				<option value="chaine_de_caractere">Chaîne de caractère</option>
				<option value="texte">Texte</option>
				<option value="bolean">Vrai/Faux</option>
			</select>
		  </div>
		</td>
		<td>
			<p>
				<input name="is_null" type="checkbox" id="is_null" value="" data-parsley-mincheck="2" />
				<label htmlFor="is_null"></label>
			</p>
		</td>
		<td>

		<div className="col m3 center">

			<a href="/#/dashboard/applications/table/delete" className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons" onClick={(e) => deleteColumn(e, column.id)}>delete</i></a>
		</div>
		</td>

	</tr>	
)


export default Table