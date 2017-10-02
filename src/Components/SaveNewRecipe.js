import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import { connect } from 'react-redux';
import {firebase} from '../_helpers';

class SaveNewRecipe extends Component {
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

    let savedRecipe = this.props.ingredients.filter(e=>{
      return e.selected
    }).map(f=>{return {name:f.name,id:f.id}})
    console.log(savedRecipe)

    if(this.state.name.length === 0 ||savedRecipe.length === 0){

      // add validation popup
      return
    }

    this.firebaseRef.push({
      name: this.state.name,
      ingredients: savedRecipe
    });
    
    this.setState({
        visible : false,
        name:''
    });

  }  

  componentWillUnmount () {
    this.firebaseRef.off();
  }  

  render() {
     return (
      <div>
        <input className='button' type="button" value="Save Recipe" onClick={() => this.openModal()}/>    
        <Modal 
          visible={this.state.visible}
          width="360"
          height="196"
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
              onChange={this.handleRecipeName}/>  
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

const connectedRegisterPage = connect(mapStateToProps)(SaveNewRecipe);
export { connectedRegisterPage as SaveNewRecipe };