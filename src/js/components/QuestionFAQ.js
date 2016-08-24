import React, { Component } from 'react'

class QuestionFAQ extends Component{
    constructor(props){
      super(props);
      this.state = {response: false, admin: 0}
    }
   render() {
      const question = this.props.question


      return (
         <ul className="collapsible popout" data-collapsible="accordion">
            <li>
               <div className="collapsible-header"> 
                  Titre Question
                  {
                     this.state.admin
                        ? <i className="fa fa-times" aria-hidden="true" onClick={ () => this.suppQuestion() }></i>
                        : <noscript/>
                  }
               </div>

               <div className="collapsible-body paddingCollapsibleBody">
                  { question.question } <i> { question.auteurQuestion } </i><br/><br/>
                  { 
                     question.reponse 
                        ? <span>{question.reponse} <br/><i> {question.auteurReponse}</i></span>
                        :  <div>
                              {
                                 this.state.admin
                                    ? <i className="fa fa-plus-circle fa-2x" aria-hidden="true" onClick ={ () => this.addResponse() }></i>
                                    : <noscript/>
                              }
                           </div>
                  }
                  {
                     this.state.admin
                        ?  <div> 
                              {  
                                 this.state.response
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

export default QuestionFAQ
