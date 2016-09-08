import React, { Component } from 'react'
import QuestionFAQ from './QuestionFAQ'
import $ from 'jquery'

class FAQ extends Component{
   constructor(props){
      super(props)
      this.state = {
         questions: [
            { titreQuestion: 'Foire aux questions', 
               question:      'Question Question Question Question Question  ?', 
               reponse:       'Reponse Reponse Reponse Reponse Reponse Reponse Reponse Reponse Reponse Reponse Reponse Reponse Reponse Reponse Reponse', 
               auteurQuestion:'Gauthier Beaumont', 
               auteurReponse: 'Gauthier Beaumont' 
            },
            { titreQuestion: 'Foire aux questions', 
               question:      'Question Question Question Question Question  ?', 
               reponse:       'Reponse Reponse Reponse Reponse Reponse Reponse Reponse Reponse Reponse Reponse Reponse Reponse Reponse Reponse Reponse', 
               auteurQuestion:'Gauthier Beaumont', 
               auteurReponse: 'Gauthier Beaumont' 
            },
            { titreQuestion: 'Foire aux questions', 
               question:      'Question Question Question Question Question  ?', 
               reponse:       'Reponse Reponse Reponse Reponse Reponse Reponse Reponse Reponse Reponse Reponse Reponse Reponse Reponse Reponse Reponse', 
               auteurQuestion:'Gauthier Beaumont', 
               auteurReponse: 'Gauthier Beaumont' 
            },
            { titreQuestion: 'Foire aux questions', 
               question:      'Question Question Question Question Question  ?', 
               reponse:       null, 
               auteurQuestion:'Gauthier Beaumont', 
               auteurReponse: null
            }
         ]
      }

   }

   render() {
      return (
         <div className="FAQ">
          <div className="container">
            <div className="content">
               <div className="row">
                  <div className="col m8 s8 l8 offset-s2 offset-m2 offset-l2">
                     <div className="row">
                        <div className="col s12 center-align">      
                           <h2>Foire aux questions</h2>
                        </div>
                     </div>
                     {
                        this.state.questions.map(function(question, i){
                           return <QuestionFAQ key={i} question={question}/>
                        }) 
                     }
                     <div className="row">
                        <div className="col s12">      
                           <h3>Voulez vous poser une question</h3>
                        </div>
                     </div>
                     <form action="" method="POST">
                        <div className="input-field col m6">
                           <i className="fa fa-question prefix"></i>
                           <input id="titleQuestion" type="text"/>
                           <label htmlFor="titleQuestion" className="">Titre question</label>
                        </div>
                        <div className="input-field col m6">
                           <input id="question" type="text"/>
                           <label htmlFor="question" className="">Question</label>
                        </div>
                        <a className="btn" onClick={(e) => this.createResponse(e)}>Create</a>
                     </form>

                  </div>
               </div>
            </div>
         </div>
        </div>
      )
   }

   createResponse(e){

      e.preventDefault();
      var titleQuestion = $('#titleQuestion').val();
      var question = $('#question').val();
      
   }

}

export default FAQ
