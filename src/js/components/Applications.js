import React from 'react'

const Applications = () => (
  <div className="Applications">
  <div className="row">
  <div className="col m10 s10">
    <div className="col s10 m10  ">
      <h2>Applications</h2>      
      <a href="/#/dashboard/applications/add" className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">add</i></a>
    </div>

          <table className="bordered">
            <thead>
              <tr>
                  <th data-field="name">Nom</th>
                  <th data-field="description">Description</th>
                  <th data-field="created_at">Date de création</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td> <a href="/#/dashboard/applications/1"> Mon application de congés</a></td>
                <td>Gestion des congés</td>
                <td>18-02-2015</td>
                <td>    
                <a href="/#/dashboard/applications/table " className="waves-effect btn-floating btn-large red">
                  <i className="large material-icons">view_list</i>
                </a>
                <a href="/#/dashboard/applications/update/1 " className="waves-effect btn-floating btn-large red">
          			 <i className="large material-icons">mode_edit</i>
        		    </a>
                <a className="waves-effect btn-floating btn-large buttonDelete red">
          			<i className="large material-icons">delete</i>
          		</a>	
    			</td>
              </tr>
              <tr>
                <td> <a href="/#/dashboard/applications/2"> Mon application de garde</a></td>
                <td>Gestion des heures de garde</td>
                <td>22-02-2015</td>
                <td> 
                <a href="/#/dashboard/applications/table " className="waves-effect btn-floating btn-large red">
                  <i className="large material-icons">view_list</i>
                </a>   
                <a href="/#/dashboard/applications/update/2 " className="waves-effect btn-floating btn-large red">
          			 <i className="large material-icons">mode_edit</i>
        		    </a>
        		    <a className="waves-effect btn-floating btn-large buttonDelete red">
          			<i className="large material-icons">delete</i>
          		</a>
    			</td>
              </tr>
              <tr>
                <td> <a href="/#/dashboard/applications/3"> Mon application de course</a></td>
                <td>Liste des courses</td>
                <td>26-02-2015</td>
                <td>    
                <a href="/#/dashboard/applications/table " className="waves-effect btn-floating btn-large red">
                  <i className="large material-icons">view_list</i>
                </a>
                <a href="/#/dashboard/applications/update/3 " className="waves-effect btn-floating btn-large red">
          			<i className="large material-icons">mode_edit</i>
            		</a>
            		<a className="waves-effect btn-floating btn-large buttonDelete red">
          			<i className="large material-icons">delete</i>
          		</a>
    			</td>
              </tr>
              <tr>
                <td> <a href="/#/dashboard/applications/4"> Mon application des dépenses</a></td>
                <td>Listes des dépenses</td>
                <td>28-02-2015</td>
                <td>    
                <a href="/#/dashboard/applications/table " className="waves-effect btn-floating btn-large red">
                <i className="large material-icons">view_list</i>
                </a>
                <a href="/#/dashboard/applications/update/4 " className="waves-effect btn-floating btn-large red">
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
      </div>                
      </div>                

)

export default Applications