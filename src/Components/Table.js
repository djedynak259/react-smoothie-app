import React, { Component } from 'react';
import TableColumn from './TableColumn.js';

class Table extends Component {
  constructor(props) {
    super(props);
    this.passTarget = this.passTarget.bind(this);
  }

  passTarget(e) {
    this.props.passTarget(e)
  }

  render() {
    var columns = [];
    var lastCategory = null;
    this.props.ingredients.forEach((ingredient) => {
      if (ingredient.category !== lastCategory) {
        columns.push(<TableColumn passTarget={this.passTarget} 
                                  ingredients={this.props.ingredients} 
                                  category={ingredient.category} 
                                  key={ingredient.category}
                                  filterText={this.props.filterText} 
                                  dispatch = {this.props.dispatch}
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

export default Table