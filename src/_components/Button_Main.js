import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button_Main extends Component {

  render() {
    return (
      <input 
        className='button' 
        type="button" 
        value={this.props.value} 
        onClick={() => this.props.handleClick()}/>
    );
  }
}

Button_Main.propTypes = {
  value: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default Button_Main;