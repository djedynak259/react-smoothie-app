import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import { connect } from 'react-redux';
import { ViewRecipe } from './ViewRecipe.js';
import ButtonViewSavedRecipes from '../_containers/ButtonViewSavedRecipes.js';

import { 
  saveRecipe,
  modal_viewRecipes_closeModal
 } from '../_actions';
import { firebase } from '../_helpers';



class ViewSavedRecipes extends Component {

  closeModal() {
    this.props.dispatch(modal_viewRecipes_closeModal())       
  }   

  componentWillMount () {
    let items = []

    this.firebaseRef = firebase.database().ref().child('react').child('SavedRecipes');
    this.firebaseRef.on("child_added", snap => {
      items.push(snap.val());
      this.props.dispatch(saveRecipe(items))
    });
  }

  render() {
    
    let recipeList = []

    this.props.savedRecipes.forEach(recipe => {
        recipeList.push(<ViewRecipe key={recipe.name} recipe={recipe}/>)
    });

     return (
      <div>
        <ButtonViewSavedRecipes />    
        <Modal 
          visible={this.props.modalVisible}
          width="400"
          height="400"
          effect="fadeInUp"
          onClickAway={() => this.closeModal()}>
          <div className='modalWrapper'>
            <h1>View Recipes</h1>
            <ul className='viewRecipeContainer'>{recipeList}</ul>
            <input className='addModalClose button' type="button" value="Close" onClick={() => this.closeModal()} />
          </div>   
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {savedRecipes} = state.recipes
  const {modalVisible} = state.viewRecipeModal
  return {savedRecipes, modalVisible};
}

const connectedRegisterPage = connect(mapStateToProps)(ViewSavedRecipes);
export { connectedRegisterPage as ViewSavedRecipes };