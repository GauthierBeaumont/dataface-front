import React from 'react'

const Header = () => (
  <div className="HeaderWrapper">
  	<header className="header">
		<a href="#"><img src="dist/images/header/logo-dataface-noir.png" className="Logo"/></a>
		<div className="Nav">
			<a className="btn" href="#">Produit</a>
			<a className="btn" href="#">Essai gratuit</a>
		</div>
  	</header>
  </div>
)

export default Header