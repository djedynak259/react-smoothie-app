import React, { Component } from 'react';
import './App.css';
import IngredientApp from './Components/FilterableProductTable.js';
import {connect} from 'react-redux';


class App extends Component {
  render() {
    return (
      <div>
        <div className='background-image'></div>
        <div className="app">
          <IngredientApp 
            ingredients={this.props.ingredients}
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

export default connect(mapStateToProps)(App);