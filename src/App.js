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
          <IngredientApp/>
        </div>
      </div>
    );
  }
}

// add login page here and routes

// function mapStateToProps(state){
//   return state
// }

// const connectedApp = connect(mapStateToProps)(App);

export { App }; 