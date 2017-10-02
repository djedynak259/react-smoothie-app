import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import { ingredientActions } from '../_actions';
import { connect } from 'react-redux';
import {firebase} from '../_helpers';

class SavedRecipes extends Component {
  mixins: [ReactFireMixin]
  constructor (props) {
    super(props);
    this.state = {
        visible : false,
        name: '',
        items:''
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

  componentDidMount () {
    var ref = firebase.database().ref().child('react').child('test1');
    ref.on('value', snap =>{
      this.setState({
        items:snap.val()
      })
    })
    console.log(ref)
  }


  handleSubmit(){
    let savedRecipe = this.props.ingredients.filter(e=>{
      return e.selected
    }).map(f=>{return f.id})

    this.props.dispatch(ingredientActions.addIngredient(this.state.name, this.state.category))
    
    this.setState({
        visible : false,
        name:''
    });
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

const connectedRegisterPage = connect(mapStateToProps)(SavedRecipes);
export { connectedRegisterPage as SavedRecipes };