import React, { Component } from 'react';
import './App.css';
import FilterableProductTable from './Components/FilterableProductTable.js';
import PRODUCTS from './Data/PRODUCTS.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Smoothie Creator</h2>
        </div>
        <FilterableProductTable products = {PRODUCTS}/>
      </div>
    );
  }
}

export default App;
