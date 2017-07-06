import React, { Component } from 'react';
import './App.css';
import FilterableProductTable from './Components/FilterableProductTable.js';


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


var PRODUCTS = [
  {category: 'Base', name: 'Banana'},
  {category: 'Base', name: 'Avocado'},
  {category: 'Base', name: 'Coconut'},
  {category: 'Base', name: 'Yerba Mate'},
  {category: 'Base', name: 'Nut Milk'},
  {category: 'Base', name: 'Seed Milk'},
  {category: 'Liquid', name: 'Almond Milk'},
  {category: 'Liquid', name: 'Organic Fruit Juice'},
  {category: 'Fruits/Veg', name: 'Spinach'},
  {category: 'Fruits/Veg', name: 'Kale'},
  {category: 'Fruits/Veg', name: 'Strawberry'},
  {category: 'Fruits/Veg', name: 'Blueberry'},
  {category: 'Add-Ons', name: 'Maca'},
  {category: 'Add-Ons', name: 'Cacao'},
  {category: 'Add-Ons', name: 'Spirulina'},
  {category: 'Add-Ons', name: 'Acai Powder'},
  {category: 'Add-Ons', name: 'Greens'},
  {category: 'Fats & Proteins', name: 'Nuts'},
  {category: 'Fats & Proteins', name: 'Hemp Seeds'},
  {category: 'Fats & Proteins', name: 'Chai Seeds'},
  {category: 'Fats & Proteins', name: 'Avocado'},
  {category: 'Fats & Proteins', name: 'Sprouts'},
  {category: 'Add-Ons', name: 'Cinnamon'},
  {category: 'Add-Ons', name: 'Vanilla'},
  {category: 'Add-Ons', name: 'Cucumbers'},
  {category: 'Add-Ons', name: 'Beets'},
  {category: 'Add-Ons', name: 'Ginger Root'},
];

export default App;
