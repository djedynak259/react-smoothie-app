import React, { Component } from 'react';

class ActionText extends Component {
  render () {
    return (
      <div className='actionText'>
        <p>{this.props.ingredient}</p>
      </div>
    );
  }
}

export default ActionText