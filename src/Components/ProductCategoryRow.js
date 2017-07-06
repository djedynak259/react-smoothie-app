import React, { Component } from 'react';

class ProductCategoryRow extends Component {
  render() {
    return (
      <tr>
        <th className='tableHeaders'>
          {this.props.category}
        </th>
      </tr>
    );
  }
}

export default ProductCategoryRow