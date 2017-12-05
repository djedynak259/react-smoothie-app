import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebase } from '../_helpers';
import { modal_saveRecipe_closeModal} from '../_actions';
import Modal from 'react-awesome-modal';
import ButtonSaveRecipe from '../_containers/ButtonSaveRecipe'

class SaveNewRecipe extends Component {
  constructor (props) {
    super(props);
    this.state = {
      name: ''
    }
  }

  closeModal() {
    this.props.dispatch(modal_saveRecipe_closeModal())
    this.setState({name:''});
  } 

  handleRecipeName (event) {
    this.setState({name: event.target.value});
  }

  handleSubmit(){

    let savedRecipe = this.props.ingredients.filter(e=>{
      return e.selected
    }).map(f=>{return {name:f.name,id:f.id}})

    if(this.state.name.length === 0 || savedRecipe.length === 0){
      return
    }

    this.firebaseRef = firebase.database().ref().child('react').child('SavedRecipes');

    this.firebaseRef.push({
      name: this.state.name,
      ingredients: savedRecipe
    });
    
    this.setState({name:''});
    this.props.dispatch(modal_saveRecipe_closeModal())
  }  

  componentWillUnmount () {
    this.firebaseRef.off();
  }  

  render() {
    return (
      <div>
        <ButtonSaveRecipe /> 
        <Modal 
          visible={this.props.modalVisible}
          width="354"
          height="139"
          effect="fadeInUp"
          onClickAway={() => this.closeModal()}>
          <div className='modalWrapper'>
            <h1>New Recipe</h1>
            <p>Enter Name of New Recipe</p>
            <input
              className='searchInput addModal'
              type="text"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.handleRecipeName(e)}/>  
            <input className='addModalAdd button'type="submit" value="Submit" onClick={() => this.handleSubmit()}/>
            <input className='addModalClose button' type="button" value="Close" onClick={() => this.closeModal()} />
          </div>   
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {recipes, ingredients} = state
  const {modalVisible} = state.saveRecipeModal
  return {recipes, ingredients, modalVisible};
}

const connectedRegisterPage = connect(mapStateToProps)(SaveNewRecipe);
export { connectedRegisterPage as SaveNewRecipe };