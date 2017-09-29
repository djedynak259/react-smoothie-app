import React, { Component } from 'react';
import {NewSelection} from './ActionText.js';
import SearchBar from './SearchBar.js';
import {Recipe} from './Recipe.js';
import {AddModalButton} from './AddModalButton.js';
import {Table} from './Table.js';
import {User} from './User.js';
import SavedRecipes from './SavedRecipes.js'
import { connect } from 'react-redux';

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
    this.setState({
      ingredient: `Yumm, ${e}!`
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
          <User/>
          <SavedRecipes/>
          <SearchBar
            filterText={this.state.filterText}
            onFilterTextInput={this.handleFilterTextInput}/>           
          <AddModalButton/>
        </div>
        <NewSelection ingredient = {this.state.ingredient}/>    
        <Recipe/>  
        <Table 
          filterText={this.state.filterText}
          passTarget={this.passTarget}/>
      </div> 
    );
  }
}

function mapStateToProps(state) {
    const { ingredients } = state;
    return {
        ingredients
    };
}
 
const connectedRegisterPage = connect(mapStateToProps)(IngredientApp);
export { connectedRegisterPage as IngredientApp };
