import React, { Component } from 'react';

class ArticleAbonnement extends Component {
    render() {
        const abonnement = this.props.abonnement
        const openmodal = this.props.openmodal
        return (
            <div className={ abonnement.order == 1 ? "pt-col-4 pt-featured" : "pt-col-4" }>
                <div className="pt-header">
                    <div className="pt-title">{abonnement.name}</div>
                    <div className="pt-price">
                        <span className="pt-amount">{parseInt(abonnement.price, 10)} €</span>
                    </div>
                </div>
                <div className="pt-features" dangerouslySetInnerHTML={{ __html: abonnement.description }}/>
                <div className="pt-footer">
                    {
                        abonnement.name != "Free"
                            ?   <div>
                                    <a className="btn btn-primary z-depth-0 modal-trigger" onClick={(e) => openmodal(e, abonnement)} role="button">Ajouter</a>
                                </div>
                            : <noscript/>
                    }
                </div>
            </div>
        )
    }
}

export default ArticleAbonnement
