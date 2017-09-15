import React, { Component } from 'react';
import './App.css';
import FilterableProductTable from './Components/FilterableProductTable.js';
import {connect} from 'react-redux';


class App extends Component {
  render() {
    return (
      <div>
        <div className='background-image'></div>
        <div className="app">
          <FilterableProductTable ingredients = {this.props.ingredients}/>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return state
}

export default connect(mapStateToProps)(App);
