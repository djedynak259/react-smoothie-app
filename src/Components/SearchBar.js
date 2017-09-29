import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
  }
  
  handleFilterTextInputChange(e) {
    this.props.onFilterTextInput(e.target.value);
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
    return {
        ingredients
    };
}
 
const connectedRegisterPage = connect(mapStateToProps)(SearchBar);
export { connectedRegisterPage as SearchBar };