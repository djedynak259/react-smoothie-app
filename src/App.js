import React, { Component } from 'react';
import './App.css';
import {IngredientApp} from './Components/IngredientApp.js';
import {connect} from 'react-redux';
import { Router, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div>
        <div className='background-image'></div>
        <div className="app">
          <IngredientApp 
            users={this.props.users}
            dispatch={this.props.dispatch}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return state
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 