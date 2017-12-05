import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
  selectRecipe, 
  modal_viewRecipes_closeModal 
} from '../_actions';


class ViewRecipe extends Component {

  viewRecipe(e) {
    let idArr = [];
    this.props.recipe.ingredients.forEach(e=>{
      idArr.push(e.id)
    })
    this.props.dispatch(selectRecipe(idArr)) 
    this.props.dispatch(modal_viewRecipes_closeModal()) 
  }

  render() {
    let ingredientList = '';    this.props.recipe.ingredients.forEach(e=>{
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