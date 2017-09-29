import React, { Component } from 'react';
import { connect } from 'react-redux';

class NewSelection extends Component {
  render () {
    return (
      <div className='actionText'>
        <p>{this.props.ingredient}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
    const { ingredients } = state;
    return {
        ingredients
    };
}

const connectedRegisterPage = connect(mapStateToProps)(NewSelection);
export { connectedRegisterPage as NewSelection };