import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { 
  addIngredient,
  modal_addIngredient_closeModal
 } from '../_actions';
import ButtonAddIngredient from '../_containers/ButtonAddIngredient'
import Modal from 'react-awesome-modal';


class AddModalButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: '',
        category: ''
    }
  }

  closeModal() {
    this.props.dispatch(modal_addIngredient_closeModal())
    this.setState({
      name:'',
      category:''
    });
  }

  handleChangeName (event) {
    this.setState({name: event.target.value});
  }

  handleChangeCategory (event) {
    this.setState({category: event.target.value});
  }

  handleSubmit(){
    this.props.dispatch(addIngredient(this.state.name, this.state.category))
    this.setState({
      name:'',
      category:''
    });
    this.props.dispatch(modal_addIngredient_closeModal())
  }    

  render() {
    return (
      <section className='addSection'>
        <ButtonAddIngredient />
        <Modal 
          visible={this.props.modalVisible}
          width="376"
          height="178"
          effect="fadeInUp"
          onClickAway={() => this.closeModal()}>
          <div className='modalWrapper'>
            <h1>Add Ingredient</h1>
            <p>Enter ingredient name and category.</p>
            <input
              className='searchInput addModal'
              type="text"
              placeholder="Name"
              value={this.state.name}
              onChange={(e)=>this.handleChangeName(e)}/> 
            <input
              className='searchInput addModal'
              type="text"
              placeholder="Category"
              value={this.state.category}
              onChange={(e)=>this.handleChangeCategory(e)}/>  
            <input className='addModalAdd button'type="submit" value="Submit" onClick={()=>this.handleSubmit()}/>
            <input className='addModalClose button' type="button" value="Close" onClick={() => this.closeModal()} />
          </div>   
        </Modal>
      </section>
    );
  }
}

AddModalButton.propTypes = {
  ingredients: PropTypes.array.isRequired
}

function mapStateToProps(state) {
    const { modalVisible } = state.addIngredientModal
    return {
      modalVisible
    };
}
 
const connectedRegisterPage = connect(mapStateToProps)(AddModalButton);
export { connectedRegisterPage as AddModalButton };