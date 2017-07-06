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
    this.props.products.forEach((product) => {
      if (product.category !== lastCategory) {
        columns.push(<TableColumn passTarget={this.passTarget} 
                                  products={this.props.products} 
                                  category={product.category} 
                                  key={product.category}
                                  filterText={this.props.filterText} 
                                  />);
      }
      lastCategory = product.category;
    });

    return (
      <div className='table'>
        {columns}
      </div>
    );
  }
}

export default Table