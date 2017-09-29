import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import {ingredientActions} from '../_actions';

class SavedRecipes extends Component {
  constructor (props) {
    super(props);
    this.state = {
        visible : false,
        name: ''
    }
  }

  openModal() {
      this.setState({
          visible : true
      });
  }

  closeModal() {
      this.setState({
          visible : false,
          name:'',
          category:''
      });
  }  

  render() {
     return (
      <div>
        <input className='button' type="button" value="Save Recipe" onClick={() => this.openModal()}/>
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
              value={this.state.name}/>  
            <input className='addModalAdd button'type="button" value="Submit" onClick={this.handleSubmit}/>
            <input className='addModalClose button' type="button" value="Close" onClick={() => this.closeModal()} />
          </div>   
        </Modal>
      </div>
    );
  }
}

export default SavedRecipes