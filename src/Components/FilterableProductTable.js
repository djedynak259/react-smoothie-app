import React, { Component } from 'react';
import ActionText from './ActionText.js';
import SearchBar from './SearchBar.js';
import Recipe from './Recipe.js';
import AddModalButton from './AddModalButton.js';
import Table from './Table.js';

class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      ingredient: 'Choose Ingredients',
      recipe: [],
      products: this.props.ingredients
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
      products: this.props.ingredients
    });
  }  

  render() {
    return (
      <div className='content'>
        <div className="app-header">
          <h2>Smoothie Creator</h2>
          <SearchBar
            filterText={this.state.filterText}
            onFilterTextInput={this.handleFilterTextInput}/>           
          <AddModalButton 
            products={this.state.products}
            addIngretient={this.handleAddIngredient}/>
        </div>
        <ActionText 
          ingredient={this.state.ingredient}/>    
        <Recipe 
          recipe={this.state.recipe}/>  
        <Table 
          products={this.props.ingredients} 
          filterText={this.state.filterText}
          passTarget={this.passTarget}/>
      </div> 
    );
  }
}

export default FilterableProductTable