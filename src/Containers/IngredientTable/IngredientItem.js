import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectIngredient, recentSelection } from './actions';


class IngredientItem extends Component {

  handleClassChange(e) {
    this.props.dispatch(selectIngredient(this.props.ingredient.id))    
    this.props.dispatch(recentSelection(this.props.ingredient.name))
  }

  render() {
     return (
      <tr>
        <td className={this.props.ingredient.selected ? 
            'tableRows highlight' : 'tableRows'} 
            onClick={()=>this.handleClassChange()}>
          {this.props.ingredient.name}
        </td>
      </tr>
    );
  }
}

const connectedRegisterPage = connect()(IngredientItem);
export { connectedRegisterPage as IngredientItem };