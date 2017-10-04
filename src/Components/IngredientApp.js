import React, { Component } from 'react';
import {NewSelection} from './NewSelection.js';
import {SearchBar} from './SearchBar.js';
import {Recipe} from './Recipe.js';
import {AddModalButton} from './AddModalButton.js';
import {Table} from './Table.js';
import {User} from './User.js';
import {SaveNewRecipe} from './SaveNewRecipe.js'
import {ViewSavedRecipes} from './ViewSavedRecipes.js'
import { connect } from 'react-redux';



// <User/>
// <NewSelection/>    

class IngredientApp extends Component {

  render() {
    return (
      <div>
        <div className='app-header'>
          <div className="content">
            <h2>Smoothie Creator</h2>

            <div className='actionBar'>
              <div className='left'>
                <SaveNewRecipe/>
                <ViewSavedRecipes/>
              </div>
              <div className='right'>
                <SearchBar/>           
                <AddModalButton/>
              </div>  
            </div>
            
            <Recipe/> 
          </div>
        </div>   
        <div className="content">
          <Table/>
        </div>
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
