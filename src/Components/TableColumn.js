import React, { Component } from 'react';
import IngredientCategory from './IngredientCategory.js';
import {IngredientItem} from './IngredientItem.js';
import { connect } from 'react-redux';

class TableColumn extends Component {

  render() {
    var rows = [];
    var column = this.props.category;
    this.props.ingredients.forEach((ingredient) => {
       if (ingredient.name.toLowerCase().indexOf(this.props.filterText.toLowerCase()) === -1) {
        return;
      }
       if (ingredient.category === column) {
        rows.push(<IngredientItem 
                    ingredient={ingredient} 
                    key={ingredient.name} />);
      }
    });
    return (
      <table className='tableColumn'>
        <thead>
          <IngredientCategory 
            key={column +1} 
            category={column}
            />
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

function mapStateToProps(state) {
    const { ingredients } = state;
    const {filterText} = state.filter
    return {
        ingredients,
        filterText
    };
}
 
const connectedRegisterPage = connect(mapStateToProps)(TableColumn);
export { connectedRegisterPage as TableColumn };