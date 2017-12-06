import React, { Component } from 'react';
import { TableColumn } from './TableColumn.js';
import { connect } from 'react-redux';

class Table extends Component {

  render() {
    var columns = [];
    var lastCategory = null;
    this.props.ingredients.forEach((ingredient,i) => {
      if (ingredient.category !== lastCategory) {
        columns.push(<TableColumn 
                       category={ingredient.category} 
                        key={ingredient.category + 1}
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

// export {Table}