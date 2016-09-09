import React, { Component } from 'react'
import ArticleAbonement from './ArticleAbonnement'
import ModalPayment from '../containers/ModalPayment'

class Abonnement extends Component{
    constructor(props){
        super(props)
        this.state = {
            displaymodal: false,
            abonnementchoise:""
        }
    }
    render(){
        const abonnement = this.props.abonnement
        const adonnements = this.props.abonnements
        const self = this
        var abonementsList = adonnements.map(function(abonnement, i){
                return <ArticleAbonement abonnement={abonnement} key={i} openmodal={(e) => self.openmodal(e, abonnement)}/>
        })
        return  (
            <section className="card-panel">
                {
                    abonnement
                        ?  <div className="infouser">
                                <h2>Abonnement</h2>
                                <div className="abonnement"> Vous disposer d'un abonnement "{abonnement.info_subscription.type_subscription.name}"</div>
                                <div className="dateend">Disponible jusqu'au {abonnement.info_subscription.date_validation}</div>
                            </div>
                        :   <div>
                                <h2>Abonnement</h2>
                                <div>Vous avez aucun abonnement.</div>
                                <article className="pricing-table">{ abonementsList }</article>
                                    {
                                        this.state.displaymodal
                                            ?   <ModalPayment closemodal={(e) => self.closemodal(e)} abonnementchoise={this.state.abonnementchoise}/>
                                            :   <noscript/>
                                    }
                            </div>
                }
            </section>
        )
    }

    openmodal(e, abonnement){
        e.preventDefault()
        this.setState({displaymodal:true,abonnementchoise:abonnement})
    }
    closemodal(e){
        e.preventDefault()
        this.setState({displaymodal:false})
    }
}

export default Abonnement
