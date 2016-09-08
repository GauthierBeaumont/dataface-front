//Base
import React from 'react'
import { getCookie } from 'utils/cookie'

const Dashboard = () => (
  <div className="Dashboard">
    DataFace
  </div>
)

export default Dashboard

//Base + state + actions
import React, { Component } from 'react'

classe Abonnement extends Component{
  constructor(props){
    super(props)
    this.state = { test: "uyh" }
  }

  render(){
    const test = this.state.test //Recuperer la valeur de test
    return(
        <div><button onClick={(e) => login(e)}></button></div>
    )
  }

  clickButton(e){
    this.setState({ test: 'test' })
  }
}