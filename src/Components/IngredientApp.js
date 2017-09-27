import React, { Component } from 'react';
import ActionText from './ActionText.js';
import SearchBar from './SearchBar.js';
import Recipe from './Recipe.js';
import AddModalButton from './AddModalButton.js';
import Table from './Table.js';
import User from './User.js';
import SavedRecipes from './SavedRecipes.js'

class IngredientApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      ingredient: 'Choose Ingredients',
      recipe: []
    };

    this.passTarget = this.passTarget.bind(this);
    this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
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

  render() {
    return (
      <div className='content'>
        <div className="app-header">
          <h2>Smoothie Creator</h2>
          <User dispatch={this.props.dispatch}
                users={this.props.users}/>
          <SavedRecipes/>
          <SearchBar
            filterText={this.state.filterText}
            onFilterTextInput={this.handleFilterTextInput}/>           
          <AddModalButton 
            dispatch = {this.props.dispatch}/>
        </div>
        <ActionText 
          ingredient={this.state.ingredient}/>    
        <Recipe 
          recipe={this.state.recipe}/>  
        <Table 
          dispatch = {this.props.dispatch}
          ingredients={this.props.ingredients} 
          filterText={this.state.filterText}
          passTarget={this.passTarget}/>
      </div> 
    );
  }
}

export default IngredientApp