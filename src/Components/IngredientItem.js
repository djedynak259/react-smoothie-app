import React, { Component } from 'react';
import {ingredientActions} from '../_actions';
import { filterActions } from '../_actions';
import { recipeActions } from '../_actions';
import { connect } from 'react-redux';

class IngredientItem extends Component {
  constructor (props) {
    super(props);
    this.state = {
      className: 'tableRows'
    }
    this.handleClassChange = this.handleClassChange.bind(this);
    this.selectIngredient = this.selectIngredient.bind(this);
  }

  handleClassChange(e) {

  }

  selectIngredient(){
    this.props.dispatch(filterActions.recentSelection(this.props.ingredient.name))
    this.props.dispatch(ingredientActions.chooseIngredient(this.props.ingredient.id))
    if(this.props.ingredient.selected===true){
      this.setState({
          className:'tableRows highlight'
      });
    } else {
      this.setState({
          className:'tableRows'
      });
    }
  }

  render() {
     return (
      <tr>
        <td className={this.state.className}
            onClick={this.selectIngredient}>
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