import React, { Component } from 'react';
import {ingredientActions} from '../_actions';
import { filterActions } from '../_actions';
import { connect } from 'react-redux';

class IngredientItem extends Component {
  constructor (props) {
    super(props);
    this.handleClassChange = this.handleClassChange.bind(this);
  }

  handleClassChange(e) {
    this.props.dispatch(filterActions.recentSelection(this.props.ingredient.name))
    this.props.dispatch(ingredientActions.chooseIngredient(this.props.ingredient.id)) 
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
  return {};
}

const connectedRegisterPage = connect(mapStateToProps)(IngredientItem);
export { connectedRegisterPage as IngredientItem };