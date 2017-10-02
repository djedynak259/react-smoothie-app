import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import { connect } from 'react-redux';
import {firebase} from '../_helpers';

class ViewSavedRecipes extends Component {
  constructor (props) {
    super(props);
    this.state = {
        visible : false,
        name: '',
        recipes:[]
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

// Testing firebase

  componentWillMount () {
    let items = []

    this.firebaseRef = firebase.database().ref().child('react').child('SavedRecipes');
    this.firebaseRef.on("child_added", snap => {
      items.push(snap.val());
      this.setState({
        recipes: items
      });
    });

  }


  handleSubmit(){

    // let savedRecipe = this.props.ingredients.filter(e=>{
    //   return e.selected
    // }).map(f=>{return f.id})
    // console.log(savedRecipe)

    // if(this.state.name.length === 0 ||savedRecipe.length === 0){

    //   // add validation popup
    //   return
    // }

    // this.firebaseRef.push({
    //   name: this.state.name,
    //   ingredients: savedRecipe
    // });
    
    // this.setState({
    //     visible : false,
    //     name:''
    // });

  }  

  componentWillUnmount () {
    this.firebaseRef.off();
  }  

  render() {
    
    let recipeList = []

    this.state.recipes.forEach(f => {
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
          height="196"
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
  const {ingredients} = state
  return {ingredients};
}

const connectedRegisterPage = connect(mapStateToProps)(ViewSavedRecipes);
export { connectedRegisterPage as ViewSavedRecipes };