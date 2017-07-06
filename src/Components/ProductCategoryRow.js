import React, { Component } from 'react';

class ProductCategoryRow extends React.Component {
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