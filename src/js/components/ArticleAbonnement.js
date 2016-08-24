import React from 'react'
import ModalPayment from './ModalPayment'

const ArticleAbonnement = ({ abonnement }) => (
    <div className={ abonnement.order == 1 ? "pt-col-4 pt-featured" : "pt-col-4" }>
        <div className="pt-header">
            <div className="pt-title">{abonnement.name}</div>
            <div className="pt-price">
                <span className="pt-amount">{abonnement.price} €</span>
            </div>
        </div>
        <div className="pt-features" dangerouslySetInnerHTML={{ __html: abonnement.description }}/>
        <div className="pt-footer">
            {
                abonnement.name != "free"
                    ? <div>
                        <a className="btn btn-primary z-depth-0 modal-trigger" role="button">Ajouter</a>
                    </div>
                    : <noscript/>
            }
        </div>
        <ModalPayment/>
    </div>
)

export default ArticleAbonnement

