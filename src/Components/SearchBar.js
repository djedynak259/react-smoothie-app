import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterActions } from '../_actions';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
  }
  
  handleFilterTextInputChange(e) {
    this.props.dispatch(filterActions.filterText(this.props.filterText))
  }
  
  render() {
    return (
      <form className='searchForm'>
        <input
          className='searchInput'
          type="text"
          placeholder="Search Ingredients..."
          value={this.props.filterText}
          onChange={this.handleFilterTextInputChange}/>
      </form>
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
 
const connectedRegisterPage = connect(mapStateToProps)(SearchBar);
export { connectedRegisterPage as SearchBar };