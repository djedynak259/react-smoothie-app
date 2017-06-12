import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <FilterableProductTable products={PRODUCTS} />
      </div>
    );
  }
}

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

class ProductRow extends React.Component {
  constructor (props) {
    super(props);
    this.handleClassChange = this.handleClassChange.bind(this);
    this.state = {classN: 'tableRows'}
  }

  handleClassChange(e) {
    this.props.onClassChange(e.target.textContent)
    if (this.state.classN === 'tableRows'){
      this.setState({classN: 'tableRows highlight'})
    } else {
      this.setState({classN: 'tableRows'})
    }
  }

  render() {
     return (
      <tr>
        <td className={this.state.classN} onClick={this.handleClassChange}>
          {this.props.product.name}
        </td>
      </tr>
    );
  }
}

class TableColumn extends React.Component {
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
       if (product.category === column) {
        rows.push(<ProductRow onClassChange={this.passTarget} product={product} key={product.name} />);
      }
    });
    return (
      <table className='tableColumn'>
        <thead>
          <ProductCategoryRow category={column} />
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class Table extends React.Component {
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
        columns.push(<TableColumn passTarget={this.passTarget} products={this.props.products} category={product.category} key={product.category} />);
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

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
    this.handleInStockInputChange = this.handleInStockInputChange.bind(this);
  }
  
  handleFilterTextInputChange(e) {
    this.props.onFilterTextInput(e.target.value);
  }
  
  handleInStockInputChange(e) {
    this.props.onInStockInput(e.target.checked);
  }
  
  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          onChange={this.handleFilterTextInputChange}
        />
      </form>
    );
  }
}

class Recipe extends React.Component {
  render () {
    return (
      <div>
        <p>{this.props.recipe}</p>
        <p>{this.props.recipee}</p>
      </div>
    );
  }
}

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      recipe: 'Ingredients',
      recipee: []
    };

    this.passTarget = this.passTarget.bind(this);
    this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
  }

  passTarget(e) {
    let temp = this.state.recipee;
    temp.push(e)
    this.setState({
      recipe: `Fuck ya, ${e}!`,
      recipee: temp
    })
  }

  handleFilterTextInput(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  render() {
    return (
      <div className='mainContainer'>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onFilterTextInput={this.handleFilterTextInput}
        />
        <Recipe recipe={this.state.recipe} recipee={this.state.recipee}/>
        <Table products={this.props.products} 
               filterText={this.state.filterText}
               passTarget={this.passTarget}
        />
      </div>
    );
  }
}


var PRODUCTS = [
  {category: 'Base', price: '$49.99', stocked: true, name: 'Banana'},
  {category: 'Base', price: '$9.99', stocked: true, name: 'Avocado'},
  {category: 'Base', price: '$29.99', stocked: true, name: 'Coconut'},
  {category: 'Liquid', price: '$99.99', stocked: true, name: 'Almond Milk'},
  {category: 'Liquid', price: '$399.99', stocked: true, name: 'Organic Fruit Juice'},
  {category: 'Fruits/Veg', price: '$199.99', stocked: true, name: 'Spinach'},
  {category: 'Fruits/Veg', price: '$199.99', stocked: true, name: 'Kale'},
  {category: 'Fruits/Veg', price: '$199.99', stocked: true, name: 'Strawberry'},
  {category: 'Fruits/Veg', price: '$199.99', stocked: true, name: 'Blueberry'},
  {category: 'Add-Ons', price: '$199.99', stocked: true, name: 'Maca'},
  {category: 'Add-Ons', price: '$199.99', stocked: true, name: 'Cacao'},
  {category: 'Add-Ons', price: '$199.99', stocked: true, name: 'Spirulina'},
  {category: 'new row', price: '$199.99', stocked: true, name: 'dirt'},
  {category: 'new row', price: '$199.99', stocked: true, name: 'stuff'}

];

export default App;
