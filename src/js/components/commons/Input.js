import React from 'react'

const Input = ({ placeholder = null, className = null, id = null, type, label = null }) => (
  <div className={`generic-input ${className}`}>
    <div className="input-field">
	  <input id={ id } type={ type } placeholder={ placeholder }/>
	  <label htmlFor={ id }>{ label }</label>
	</div>
  </div>
)

export default Input