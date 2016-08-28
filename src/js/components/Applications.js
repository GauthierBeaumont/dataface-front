import React from 'react'

const Applications = () => (
  <div className="Applications">

<div className="col m10 left-align">
  <a className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">add</i></a>
</div>
      <table className="bordered col m10">
        <thead>
          <tr>
              <th data-field="name">Nom</th>
              <th data-field="description">Description</th>
              <th data-field="created_at">Date de création</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Mon application de congés</td>
            <td>Gestion des congés</td>
            <td>18-02-2015</td>
            <td>    
            <a className="waves-effect btn-floating btn-large red">
      			<i className="large material-icons">mode_edit</i>
    		</a>
            <a className="waves-effect btn-floating btn-large buttonDelete red">
      			<i className="large material-icons">delete</i>
      		</a>	
			</td>
          </tr>
          <tr>
            <td>Mon application de garde</td>
            <td>Gestion des heures de garde</td>
            <td>22-02-2015</td>
            <td>    
            <a className="waves-effect btn-floating btn-large red">
      			<i className="large material-icons">mode_edit</i>
    		</a>
    		<a className="waves-effect btn-floating btn-large buttonDelete red">
      			<i className="large material-icons">delete</i>
      		</a>
			</td>
          </tr>
          <tr>
            <td>Mon application de course</td>
            <td>Liste des courses</td>
            <td>26-02-2015</td>
            <td>    
            <a className="waves-effect btn-floating btn-large red">
      			<i className="large material-icons">mode_edit</i>
    		</a>
    		<a className="waves-effect btn-floating btn-large buttonDelete red">
      			<i className="large material-icons">delete</i>
      		</a>
			</td>
          </tr>
          <tr>
            <td>Mon application des dépenses</td>
            <td>Listes des dépenses</td>
            <td>28-02-2015</td>
            <td>    
            <a className="waves-effect btn-floating btn-large red">
      			<i className="large material-icons">mode_edit</i>
    		</a>
    		<a className="waves-effect btn-floating btn-large buttonDelete red">
      			<i className="large material-icons">delete</i>
      		</a>
			</td>
          </tr>
          <tr>
            <td>Mon application des tâches</td>
            <td>Gestion des tâches</td>
            <td>29-02-2015</td>
            <td>    
            <a className="waves-effect btn-floating btn-large red">
      			<i className="large material-icons">mode_edit</i>
    		</a>
    		<a className="waves-effect btn-floating btn-large buttonDelete red">
      			<i className="large material-icons">delete</i>
      		</a>
			</td>
          </tr>

        </tbody>
      </table>
            





    
  </div>
)

export default Applications