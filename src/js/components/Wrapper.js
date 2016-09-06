import React from 'react'

const Wrapper = ({ children }) => (
  <div className="Wrapper">
	<header className="header">
  		<a href="#"><img src="dist/images/logo-dataface-noir.png" className="Logo"/></a>
  		<div className="Nav">
  			<a className="btn" href="#">Produit</a>
  			<a className="btn" href="#">Essai gratuit</a>
  		</div>
  	</header>
    { children }
    <div className="footer center">
      <a className="footer_link" href="/#/mentions-legales">Mentions légales</a>
      <a className="footer_link" href="/#/confidentialite">Confidentialité</a>
    </div>
  </div>
)

export default Wrapper