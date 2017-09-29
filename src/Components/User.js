import React, { Component } from 'react';
import {userActions} from '../_actions';
import { connect } from 'react-redux';

class User extends Component {
  constructor (props) {
    super(props);

    this.handleNewUser = this.handleNewUser.bind(this)
  }

  handleNewUser() {
    this.props.dispatch(userActions.createNewUser())
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

function mapStateToProps(state) {
    const { users } = state;
    return {
        users
    };
}
 
const connectedRegisterPage = connect(mapStateToProps)(User);
export { connectedRegisterPage as User };