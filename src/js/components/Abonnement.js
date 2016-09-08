import React, { Component } from 'react'
import ArticleAbonement from './ArticleAbonnement'
import ModalPayment from './ModalPayment'

class Abonnement extends Component{
    constructor(props){
        super(props)
        this.state = { userInfo:    {"type_subscription": "Free",
                                        "end_subscription": {
                                        "date": "2016-08-08 09:41:03.000000",
                                        "timezone_type": 3,
                                        "timezone": "UTC"
                                        }
                                    },
                    abonnement: [{name:'free', price :'0', description : "<ul>" +
                                "<li>Nombre d'application limiter à une</li>" +
                                "<li>Limiter à 15 jours </li>" +
                                "</ul>", order:"0"},
                                {name:"premium" , price :'500', description : "<ul>" +
                                "<li>Nombre d'application limiter à 10</li>" +
                                "<li>Limiter à 12 mois </li>" +
                                "</ul>", order:"0"},
                                {name:"business" , price :'1500', description : "<ul>" +
                                "<li>Nombre d'application illimité</li>" +
                                "<li>Limiter à 24 mois </li>" +
                                "</ul>", order:"1"},
                                {name:"pro" , price :'2500', description : "<ul>" +
                                "<li>Nombre d'application illimité</li>" +
                                "<li>à vie </li>" +
                                "</ul>", order:"0"}

                            ],
                            displaymodal: false,
                            abonnementchoise:"",
                    }
    }
    render(){
        const userinfo = this.state.userInfo
        const adonnements = this.state.abonnement
        const self = this
        var abonementsList = adonnements.map(function(abonnement, i){
                return <ArticleAbonement abonnement={abonnement} key={i} openmodal={(e) => self.openmodal(e, abonnement)}/>
        })
        return  (
            <section>
                <div className="infouser">
                   <div className="abonnement"> Vous disposer d un abonnement {userinfo.type_subscription}</div>
                   <div className="dateend"> Jusqu au {userinfo.date}</div>
                </div>
                <article className="pricing-table">{ abonementsList }</article>
                {
                    this.state.displaymodal
                        ?   <ModalPayment closemodal={(e) => self.closemodal(e)} abonnementchoise={this.state.abonnementchoise}/>
                        :   <noscript/>
                }
            </section>
        )
    }

    openmodal(e, abonnement){
        e.preventDefault()
        console.log(abonnement);
        this.setState({displaymodal:true,abonnementchoise:abonnement})

    }
    closemodal(e){
        e.preventDefault()
        this.setState({displaymodal:false})
    }
}

export default Abonnement
