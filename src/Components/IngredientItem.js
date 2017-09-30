import React, { Component } from 'react';
import {ingredientActions} from '../_actions';
import { filterActions } from '../_actions';

class IngredientItem extends Component {
  constructor (props) {
    super(props);
    this.handleClassChange = this.handleClassChange.bind(this);
    this.state = {classN: 'tableRows'}
  }

  handleClassChange(e) {
    this.props.dispatch(filterActions.recentSelection(this.props.ingredient.id))
    this.props.dispatch(ingredientActions.chooseIngredient(this.props.ingredient.id))
    this.props.onClassChange(e.target.textContent)
    if (this.state.classN === 'tableRows'){
      this.setState({classN: 'tableRows highlight'})
    } else {
      this.setState({classN: 'tableRows'})
    }
  }

  render() {
     return (
      <tr>
        <td className={this.state.classN} onClick={this.handleClassChange}>
          {this.props.ingredient.name}
        </td>
      </tr>
    );
  }
}

export  {IngredientItem}