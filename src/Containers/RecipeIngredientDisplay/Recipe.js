import React, { Component } from 'react';
import { connect } from 'react-redux';

class Recipe extends Component {
  render () {
    let string = '';

    let selectedIngredients = this.props.ingredients.filter(e => {
      return e.selected
    })

    for (var i=0;i<selectedIngredients.length;i++) {
      if(string.length===0) {
        string = `${selectedIngredients[i].name}`;  
      } else {
        string = `${string}, ${selectedIngredients[i].name}`;
      }
    }

    return (
      <div className='recipe'>
        <p>Recipe: {string}</p>
      </div>
    );
  }
}


function mapStateToProps(state) {
    const { ingredients } = state;
    return {
        ingredients
    };
}

const connectedRegisterPage = connect(mapStateToProps)(Recipe);
export { connectedRegisterPage as Recipe };