import React, { Component } from 'react';
import { TableColumn } from './TableColumn.js';
import { connect } from 'react-redux';

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
                                  category={ingredient.category} 
                                  key={ingredient.category}
                                  filterText={this.props.filterText} 
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