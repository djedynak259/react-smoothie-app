import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Smoothie Creator</h2>
        </div>
        <FilterableProductTable products={PRODUCTS} />
      </div>
    );
  }
}

class Examples extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : false
        }
    }

    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }

    render() {
        return (
            <section>
                <h1>React-Modal Examples</h1>
                <input type="button" value="Open" onClick={() => this.openModal()} />
                <Modal 
                    visible={this.state.visible}
                    width="400"
                    height="300"
                    effect="fadeInUp"
                    onClickAway={() => this.closeModal()}
                >
                    <div>
                        <h1>Title</h1>
                        <p>Some Contents</p>
                        <input type="button" value="Close" onClick={() => this.closeModal()} />
                    </div>
                </Modal>
            </section>
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

class SearchBar extends React.Component {
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
          className='search'
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
    let string = '';
    let count = 0;
    for (var i=0;i<this.props.recipe.length;i++) {
      if(count===0) {
        string = `${this.props.recipe[i]}`;  
        count ++;
      } else {
        string = `${string}, ${this.props.recipe[i]}`;
      }
    }
    return (
      <div className='recipe'>
        <p>Recipe: {string}</p>
      </div>
    );
  }
}

class ActionText extends React.Component {
  render () {
    return (
      <div className='actionText'>
        <p className='yumm'>{this.props.ingredient}</p>
      </div>
    );
  }
}

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      ingredient: 'Choose Ingredients',
      recipe: []
    };

    this.passTarget = this.passTarget.bind(this);
    this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
  }

  passTarget(e) {
    let recipeArr = this.state.recipe;
    if(recipeArr.includes(e)){
      recipeArr.splice(recipeArr.indexOf(e),1)
    } else {
      recipeArr.push(e)
    }
    this.setState({
      ingredient: `Yumm, ${e}!`,
      recipe: recipeArr
    })
  }

  handleFilterTextInput(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  render() {
    return (
      <div>
        <div className='actionWrapper'>
          <ActionText ingredient={this.state.ingredient}/>    
          <SearchBar
            filterText={this.state.filterText}
            onFilterTextInput={this.handleFilterTextInput}
          />
          <Recipe recipe={this.state.recipe} />  
          <Examples />
        </div> 
        <div className='mainContainer'>
          <Table products={this.props.products} 
               filterText={this.state.filterText}
               passTarget={this.passTarget}
          />
        </div>
      </div> 
    );
  }
}


var PRODUCTS = [
  {category: 'Base', name: 'Banana'},
  {category: 'Base', name: 'Avocado'},
  {category: 'Base', name: 'Coconut'},
  {category: 'Base', name: 'Yerba Mate'},
  {category: 'Base', name: 'Nut Milk'},
  {category: 'Base', name: 'Seed Milk'},
  {category: 'Liquid', name: 'Almond Milk'},
  {category: 'Liquid', name: 'Organic Fruit Juice'},
  {category: 'Fruits/Veg', name: 'Spinach'},
  {category: 'Fruits/Veg', name: 'Kale'},
  {category: 'Fruits/Veg', name: 'Strawberry'},
  {category: 'Fruits/Veg', name: 'Blueberry'},
  {category: 'Add-Ons', name: 'Maca'},
  {category: 'Add-Ons', name: 'Cacao'},
  {category: 'Add-Ons', name: 'Spirulina'},
  {category: 'Add-Ons', name: 'Acai Powder'},
  {category: 'Add-Ons', name: 'Greens'},
  {category: 'Fats & Proteins', name: 'Nuts'},
  {category: 'Fats & Proteins', name: 'Hemp Seeds'},
  {category: 'Fats & Proteins', name: 'Chai Seeds'},
  {category: 'Fats & Proteins', name: 'Avocado'},
  {category: 'Fats & Proteins', name: 'Sprouts'},
  {category: 'Add-Ons', name: 'Maca'},
  {category: 'Add-Ons', name: 'Cinnamon'},
  {category: 'Add-Ons', name: 'Vanilla'},
  {category: 'Add-Ons', name: 'Cucumbers'},
  {category: 'Add-Ons', name: 'Beets'},
  {category: 'Add-Ons', name: 'Ginger Root'},
];

export default App;
