import React, { Component } from 'react';
// import {NewSelection} from './NewSelection.js';
import {SearchBar} from './SearchBar.js';
import {Recipe} from './Recipe.js';
import {AddModalButton} from './AddModalButton.js';
import {Table} from './Table.js';
// import {User} from './User.js';
import {SaveNewRecipe} from './SaveNewRecipe.js'
import {ViewSavedRecipes} from './ViewSavedRecipes.js'
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
