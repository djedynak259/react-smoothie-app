import React, { Component } from 'react';
import {actions} from '../_actions';

class User extends Component {
  constructor (props) {
    super(props);

    this.handleNewUser = this.handleNewUser.bind(this)
  }

  handleNewUser() {
    this.props.dispatch(actions.createNewUser())
  }

  render() {
     return (
      <div> 
        Username:{this.props.users.username}
        <input className='button'type="button" value="Create User" onClick={this.handleNewUser}/>
      </div>
    );
  }
}

export default User