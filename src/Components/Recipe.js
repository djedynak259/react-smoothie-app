import React, { Component } from 'react';

class Recipe extends Component {
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

export default Recipe