import React, { Component } from 'react';
import './App.css';
import FilterableProductTable from './Components/FilterableProductTable.js';
import PRODUCTS from './Data/PRODUCTS.js';


class App extends Component {
  render() {
    return (
      <div>
        <div className='background-image'></div>
        <div className="app">
          <FilterableProductTable products = {PRODUCTS}/>
        </div>
      </div>
    );
  }
}

export default App;
