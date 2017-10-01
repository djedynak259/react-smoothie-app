import React, { Component } from 'react';
import { connect } from 'react-redux';

class NewSelection extends Component {
  render () {
    return (
      <div className='actionText'>
        <p>{this.props.recentSelection}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
    const { recentSelection } = state.filter;
    return {
        recentSelection
    };
}

const connectedRegisterPage = connect(mapStateToProps)(NewSelection);
export { connectedRegisterPage as NewSelection };