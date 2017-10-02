import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import { connect } from 'react-redux';

class ViewSavedRecipes extends Component {
  constructor (props) {
    super(props);
    this.state = {
        visible : false,
        name: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleRecipeName = this.handleRecipeName.bind(this)
  }

  openModal() {
      this.setState({
          visible : true
      });
  }

  closeModal() {
      this.setState({
          visible : false,
          name:''
      });
  } 

  handleRecipeName (event) {
    this.setState({name: event.target.value});
  }

  handleSubmit(){
      // complete this code
  }   

  render() {
    
    let recipeList = []

    this.props.savedRecipes.forEach(f => {
        let ingredientList = '';
        f.ingredients.forEach(e=>{
          ingredientList+=`${e.name} `
        })
        recipeList.push(<div><p>{f.name}</p><p>{ingredientList}</p></div>)
    });

     return (
      <div>
        <input className='button' type="button" value="View Savex Recipes" onClick={() => this.openModal()}/>    
        <Modal 
          visible={this.state.visible}
          width="360"
          height="500"
          effect="fadeInUp"
          onClickAway={() => this.closeModal()}>
          <div className='modalWrapper'>
            <h1>ViewRecipes</h1>
            <ul>{recipeList}</ul>
      
            <input className='addModalAdd button'type="button" value="Submit" onClick={this.handleSubmit}/>
            <input className='addModalClose button' type="button" value="Close" onClick={() => this.closeModal()} />
          </div>   
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {savedRecipes} = state.recipes
  return {savedRecipes};
}

const connectedRegisterPage = connect(mapStateToProps)(ViewSavedRecipes);
export { connectedRegisterPage as ViewSavedRecipes };