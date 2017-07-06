import React, { Component } from 'react';
import ActionText from './ActionText.js';
import SearchBar from './SearchBar.js';
import Recipe from './Recipe.js';
import AddModalButton from './AddModalButton.js';
import Table from './Table.js';
import PRODUCTS from '../Data/PRODUCTS.js';

class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      ingredient: 'Choose Ingredients',
      recipe: [],
      products: PRODUCTS
    };

    this.passTarget = this.passTarget.bind(this);
    this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
    this.handleAddIngredient = this.handleAddIngredient.bind(this);
  }

  passTarget(e) {
    let recipeArr = this.state.recipe;
    if(recipeArr.includes(e)){
      recipeArr.splice(recipeArr.indexOf(e),1)
    } else {
      recipeArr.push(e)
    }
    this.setState({
      ingredient: `Yumm, ${e}!`,
      recipe: recipeArr
    })
  }

  handleFilterTextInput(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  handleAddIngredient() {
    this.setState({
      products: PRODUCTS
    });
  }  

  render() {
    return (
      <div className='content'>
        <div className='actionWrapper'>
          <ActionText 
            ingredient={this.state.ingredient}/>    
          <SearchBar
            filterText={this.state.filterText}
            onFilterTextInput={this.handleFilterTextInput}/>
          <Recipe 
            recipe={this.state.recipe}/>  
          <AddModalButton 
            products={this.state.products}
            addIngretient={this.handleAddIngredient}/>
        </div> 
        <div className='mainContainer'>
          <Table 
            products={this.state.products} 
            filterText={this.state.filterText}
            passTarget={this.passTarget}/>
        </div>
      </div> 
    );
  }
}

export default FilterableProductTable