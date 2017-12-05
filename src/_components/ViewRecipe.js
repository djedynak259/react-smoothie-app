import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ingredientActions } from '../_actions';
import { viewRecipeModalActions } from '../_actions';

class ViewRecipe extends Component {

  viewRecipe(e) {
    let idArr = [];
    this.props.recipe.ingredients.forEach(e=>{
      idArr.push(e.id)
    })
    this.props.dispatch(ingredientActions.selectRecipe(idArr)) 
    this.props.dispatch(viewRecipeModalActions.closeModal()) 
  }

  render() {
    let ingredientList = '';
    this.props.recipe.ingredients.forEach(e=>{
      ingredientList+=`${e.name} `
    })

    return (
      <div className='viewRecipeRecipe' onClick={() => this.viewRecipe()}> 
        <div className='viewRecipeName'>{this.props.recipe.name}</div> 
        <div className='viewRecipeIngredients'> - {ingredientList}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

const connectedRegisterPage = connect(mapStateToProps)(ViewRecipe);
export { connectedRegisterPage as ViewRecipe };