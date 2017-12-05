import React, { Component } from 'react';
import {ingredientActions} from '../_actions';
import { recentSelection } from '../_actions';
// import { recipeActions } from '../_actions';
import { connect } from 'react-redux';

class IngredientItem extends Component {
  constructor(props) {
    super(props);
    this.handleClassChange = this.handleClassChange.bind(this);
  }

  handleClassChange(e) {
    this.props.dispatch(ingredientActions.chooseIngredient(this.props.ingredient.id))    
    this.props.dispatch(recentSelection(this.props.ingredient.name))
  }

  render() {
     return (
      <tr>
        <td className={this.props.ingredient.selected ? 
            'tableRows highlight' 
            : 
            'tableRows'} 
            onClick={this.handleClassChange}>
          {this.props.ingredient.name}
        </td>
      </tr>
    );
  }
}

function mapStateToProps(state) {
  const {ingredients} = state
  return {ingredients};
}

const connectedRegisterPage = connect(mapStateToProps)(IngredientItem);
export { connectedRegisterPage as IngredientItem };