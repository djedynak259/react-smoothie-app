import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TableColumn } from './TableColumn.js';

class Table extends Component {

  render() {
    var columns = [];
    var lastCategory = null;
    this.props.ingredients.forEach((ingredient,i) => {
      if (ingredient.category !== lastCategory) {
        columns.push(<TableColumn 
                       category={ingredient.category} 
                        key={ingredient.category + i}
                        />);
      }
      lastCategory = ingredient.category;
    });

    return (
      <div className='table'>
        {columns}
      </div>
    );
  }
}


function mapStateToProps(state) {
    const { ingredients } = state
    return {
        ingredients
    };
}
 
const connectedRegisterPage = connect(mapStateToProps)(Table);
export { connectedRegisterPage as Table };