import React, { Component } from 'react';
import { ingredientActions } from '../_actions';
import { recipeActions } from '../_actions';
import { connect } from 'react-redux';

class ViewRecipe extends Component {
  constructor (props) {
    super(props);
    this.viewRecipe = this.viewRecipe.bind(this);
  }

  viewRecipe(e) {
    let idArr = [];
    this.props.recipe.ingredients.forEach(e=>{
      idArr.push(e.id)
    })
    this.props.dispatch(ingredientActions.selectRecipe(idArr)) 
    this.props.dispatch(recipeActions.closeModal()) 
  }

  render() {
    let ingredientList = '';
    this.props.recipe.ingredients.forEach(e=>{
      ingredientList+=`${e.name} `
    })

    return (
      <div>
        <div onClick={this.viewRecipe}> {this.props.recipe.name} - {ingredientList}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

const connectedRegisterPage = connect(mapStateToProps)(ViewRecipe);
export { connectedRegisterPage as ViewRecipe };