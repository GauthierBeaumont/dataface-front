import React from 'react'

const Wrapper = ({ children }) => (
  <div className="Wrapper">
	<header className="header">
  		<img src="dist/images/logo-dataface-noir.png" className="Logo"/>
  		<div className="Nav">
  			<a className="btn" href="#">Produit</a>
  			<a className="btn" href="#">Essai gratuit</a>
  		</div>
  	</header>
    { children }
    <div className="footer">
      <a className="footer_link" href="#">Mentions légales</a>
      <a className="footer_link" href="#">Confidentialité</a>
    </div>
  </div>
)

export default Wrapper