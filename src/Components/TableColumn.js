import React, { Component } from 'react';
import ProductCategoryRow from './ProductCategoryRow.js';
import ProductRow from './ProductRow.js';

class TableColumn extends Component {
  constructor (props) {
    super(props);
    this.passTarget = this.passTarget.bind(this);
  }

  passTarget(e) {
    this.props.passTarget(e)
  }

  render() {
    var rows = [];
    var column = this.props.category;
    this.props.products.forEach((product) => {
       if (product.name.toLowerCase().indexOf(this.props.filterText.toLowerCase()) === -1) {
        return;
      }
       if (product.category === column) {
        rows.push(<ProductRow onClassChange={this.passTarget} product={product} key={product.name} />);
      }
    });
    return (
      <table className='tableColumn'>
        <thead>
          <ProductCategoryRow key={column +1} category={column} />
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export default TableColumn