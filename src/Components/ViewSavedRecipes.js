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
    this.firebaseRef.on('value', snap =>{
      this.setState({
        recipes:snap.val()
      })
    })

    this.firebaseRef.on("child_added", function(dataSnapshot) {
      items.push(dataSnapshot.val());
      this.setState({
        recipes: items
      });
    }.bind(this));

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

   this.firebaseRef.on('value', function(snapshot){
    snapshot.forEach(function(child){
        var value = child.val();
        recipeList.push({name: value.name})
    });

    console.log(recipeList)
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