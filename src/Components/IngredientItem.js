import React, { Component } from 'react';
import {ingredientActions} from '../_actions';
import { filterActions } from '../_actions';
import { connect } from 'react-redux';

class IngredientItem extends Component {
  constructor (props) {
    super(props);
    this.state = {classN: 'tableRows'}
    
    this.handleClassChange = this.handleClassChange.bind(this);
  }

  handleClassChange(e) {
    this.props.dispatch(filterActions.recentSelection(this.props.ingredient.name))
    this.props.dispatch(ingredientActions.chooseIngredient(this.props.ingredient.id))

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

function mapStateToProps(state) {
  return {};
}

const connectedRegisterPage = connect(mapStateToProps)(IngredientItem);
export { connectedRegisterPage as IngredientItem };