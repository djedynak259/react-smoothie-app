import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterText } from './actions';

class SearchBar extends Component {
  
  handleFilterTextInputChange(e) {
    this.props.dispatch(filterText(e.target.value))
  }
  
  render() {
    return (
      <form className='searchForm'>
        <input
          className='searchInput'
          type="text"
          placeholder="Search Ingredients..."
          value={this.props.filterText}
          onChange={(e)=>this.handleFilterTextInputChange(e)}/>
      </form>
    );
  }
}

function mapStateToProps(state) {
    const {ingredients} = state;
    const {filterText} = state.filter
    return {
        ingredients,
        filterText
    };
}
 
const connectedRegisterPage = connect(mapStateToProps)(SearchBar);
export { connectedRegisterPage as SearchBar };