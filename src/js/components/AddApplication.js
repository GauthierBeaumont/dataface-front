import React from 'react'
import ErrorMessage from './commons/ErrorMessage'

const defaultErrorState = {
   name: null
}

export default class AddApplication extends React.Component {
  constructor(props) {
    super(props)
    this.state = { errors: defaultErrorState }
  }

  render() {
    const { name } = this.state.errors
    const { application } = this.props

    return (
        <div className="AddApplication card-panel ">
          <div className="col m10 s10 l10">
            <form action="" method="POST" onSubmit={(e) => this.submit(e)}>
              <div className="row">
                <div className="col s6">
                    <h2>Ajouter une application</h2>
                </div>
                <div className="col s6 right-align">
                  <a href="/#/dashboard/applications" className="waves-effect waves-light btn red">
                    <i className="fa fa-arrow-left" aria-hidden="true"/>Retour
                  </a>
                </div>
              </div>
              <div className="clearfix">
              { name ? <ErrorMessage message={name}/> : <noscript/> }
              <div className="input-field col m12">
                <input id="name" name="name" type="tel"/>
                <label htmlFor="name" className="">Nom</label>
              </div>
              <div className="input-field col m12">
                <textarea id="description" name="description" className="materialize-textarea"></textarea>
                <label htmlFor="description" className="">Description</label>
              </div>
              <button className="col s12 m12 l12 waves-effect waves-light btn-large z-depth-0 z-depth-1-hover"  onClick={(e) => this.submit(e)}>Enregistrer</button>
              </div>
            </form>
          </div>
        </div>
    )
  }

  submit(e){
    e.preventDefault()
    let errors = { ...defaultErrorState }
    let hasError = false

    const name = document.querySelector('#name').value
    const description = document.querySelector('#description').value

    if (!name) {
      errors.name = 'Veuillez saisir un nom pour votre application'
      hasError = true
    }

    this.setState({errors})

    if (!hasError){
      this.props.addApplication({ name, description })
    }
 }
}
