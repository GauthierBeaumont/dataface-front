import React, { Component } from 'react'

class ListeUsers extends Component{
    constructor(props){
      super(props);
      this.state = {admin: 0}
    }
   render() {
      const user = this.props.name


      return (
         <ul className="collapsible popout" data-collapsible="accordion">
            <li>
               <div className="collapsible-header">
                  {
                     this.state.admin
                        ? <i className="fa fa-times" aria-hidden="true" onClick={ () => this.suppUser() }></i>
                        : <noscript/>
                  }
               </div>

               <div className="collapsible-body paddingCollapsibleBody">
                  <table>
                     <thead>
                         <tr>
                             <th data-field="name">Name</th>
                             <th data-field="id_docker">Id Docker</th>
                             <th data-field="status">Status</th>
                             <th data-field="dt_create">Date de création</th>
                             <th data-field="ucp">État</th>
                         </tr>
                     </thead>

                     <tbody>
                     {

                     }
                         <tr>
                           <td>this.application.name</td>
                           <td>this.application.</td>
                           <td>$0.87</td>
                         </tr>
                         <tr>
                           <td>Alan</td>
                           <td>Jellybean</td>
                           <td>$3.76</td>
                         </tr>
                         <tr>
                           <td>Jonathan</td>
                           <td>Lollipop</td>
                           <td>$7.00</td>
                         </tr>
                     </tbody>
                  </table>








                  { user.applications } <i> { question.auteurQuestion } </i><br/><br/>
                  {
                     question.reponse
                        ? <span>{question.reponse} <br/><i> {question.auteurReponse}</i></span>
                        :  <div>
                              {
                                 this.state.admin
                                    ? <i className="fa fa-plus-circle fa-2x" aria-hidden="true" onClick ={ () => this.addContainer() }></i>
                                    : <noscript/>
                              }
                           </div>
                  }
                  {
                     this.state.admin
                        ?  <div>
                              {
                                 this.state.container
                                    ? <div>
                                          <textarea id="response" rows="4" cols="50"></textarea>
                                          <a className="btn" onClick={(e) => this.createResponse(e)}>Create</a>
                                          <a className="btn green" onClick={(e) => this.updateResponse(e)}>Update</a>
                                          <a className="btn red" onClick={(e) => this.deleteResponse(e)}>Delete</a>
                                       </div>
                                    : <noscript/>
                              }
                           </div>
                        : <noscript/>
                  }
               </div>
            </li>
         </ul>
      )
   }

   suppQuestion(){
      //id de la question
   }

   addResponse(){
      this.setState({ response : !this.state.response })
   }

   createResponse(){
      var response = $('#response').val();
   }

   updateResponse(){
      var response = $('#response').val();
   }

   deleteResponse(){
      //id de la reponse
   }

}

export default ListeUsers
