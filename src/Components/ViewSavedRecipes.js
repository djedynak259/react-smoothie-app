import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import { connect } from 'react-redux';
import {ViewRecipe} from './ViewRecipe.js';
import { recipeActions } from '../_actions';
import {firebase} from '../_helpers';



class ViewSavedRecipes extends Component {
  constructor (props) {
    super(props);
    this.state = {
        name: '',
        visible: this.props.visible
    }
    this.handleRecipeName = this.handleRecipeName.bind(this)
  }

  openModal() {
    this.props.dispatch(recipeActions.openModal()) 
  }

  closeModal() {
    this.setState({
        name:''
    });
    this.props.dispatch(recipeActions.closeModal())       
  } 

  handleRecipeName (event) {
    this.setState({name: event.target.value});
  }   

  componentWillMount () {
    let items = []

    this.firebaseRef = firebase.database().ref().child('react').child('SavedRecipes');
    this.firebaseRef.on("child_added", snap => {
      items.push(snap.val());
      this.props.dispatch(recipeActions.saveRecipe(items))
    });
  }

  componentWillReceiveProps(nextProps){
      this.setState({
        visible:nextProps.visible
    });
  }

  render() {
    
    let recipeList = []

    this.props.savedRecipes.forEach(recipe => {
        recipeList.push(<ViewRecipe key={recipe.name} recipe={recipe}/>)
    });

     return (
      <div>
        <input className='button' type="button" value="View Saved Recipes" onClick={() => this.openModal()}/>    
        <Modal 
          visible={this.state.visible}
          width="400"
          height="400"
          effect="fadeInUp"
          onClickAway={() => this.closeModal()}>
          <div className='modalWrapper'>
            <h1>View Recipes</h1>
            <ul className='viewRecipeContainer'>{recipeList}</ul>
            <input className='addModalAdd button'type="button" value="Submit" onClick={this.handleSubmit}/>
            <input className='addModalClose button' type="button" value="Close" onClick={() => this.closeModal()} />
          </div>   
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {savedRecipes,visible} = state.recipes
  return {savedRecipes, visible};
}

const connectedRegisterPage = connect(mapStateToProps)(ViewSavedRecipes);
export { connectedRegisterPage as ViewSavedRecipes };