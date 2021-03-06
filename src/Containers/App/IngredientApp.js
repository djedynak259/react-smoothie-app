import React, { Component } from 'react';
// import {NewSelection} from './NewSelection.js';
import {SearchBar} from 'Containers/FilterIngredients/SearchBar';
import {Recipe} from 'Containers/RecipeIngredientDisplay/Recipe.js';
import {AddModalButton} from 'Containers/AddIngredient/AddModalButton';
import {Table} from 'Containers/IngredientTable/Table.js';
// import {User} from './User.js';
import {SaveNewRecipe} from 'Containers/RecipeSaveAndView/SaveNewRecipe'
import {ViewSavedRecipes} from 'Containers/RecipeSaveAndView/ViewSavedRecipes'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';



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
          </div>
        </div>   
        <div className="mainContent">
          <div className='content'>
            <Recipe/>  
            <Table/>
          </div>
        </div>
      </div>  
    );
  }
  
}

IngredientApp.propTypes = {
  ingredients: PropTypes.array.isRequired
}

function mapStateToProps(state) {
    const { ingredients } = state;
    return {
        ingredients
    };
}
 
const connectedRegisterPage = connect(mapStateToProps)(IngredientApp);
export { connectedRegisterPage as IngredientApp };
