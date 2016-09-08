import React from 'react'

const Wrapper = ({ children }) => (
  <div className="Wrapper">
	<header className="header">
  		<a href="#"><img src="dist/images/home/logo-dataface-blanc.png" className="Logo" style={{height: 50}}/></a>
  	</header>
    { children }
    <div className="footer center">
      <a className="footer_link" href="/#/mentions-legales">Mentions légales</a>
      <a className="footer_link" href="/#/confidentialite">Confidentialité</a>
    </div>
  </div>
)

export default Wrapper
