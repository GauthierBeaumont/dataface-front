import React from 'react';

export default class ErrorMessage extends React.Component {
  render() {
    return (
      <div className="alert alert-border-left col m12">
        <strong>{ this.props.message }</strong>
      </div>
    )
  }
}
