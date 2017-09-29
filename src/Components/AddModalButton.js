import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import {ingredientActions} from '../_actions';
import { connect } from 'react-redux';

class AddModalButton extends Component {
  constructor(props) {
      super(props);
      this.state = {
          visible : false,
          name: '',
          category: ''
      }

      this.handleChangeName = this.handleChangeName.bind(this); 
      this.handleChangeCategory = this.handleChangeCategory.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);        
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

  handleChangeName (event) {
    this.setState({name: event.target.value});
  }

  handleChangeCategory (event) {
    this.setState({category: event.target.value});
  }

  handleSubmit(){
    this.props.dispatch(actions.addIngredient(this.state.name, this.state.category))
    this.setState({
        visible : false,
        name:'',
        category:''
    });
  }    

  render() {
      return (
          <section className='addSection'>
              <input className='button' type="button" value="Add Ingredients" onClick={() => this.openModal()} />
              <Modal 
                visible={this.state.visible}
                width="360"
                height="196"
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
                    onChange={this.handleChangeName}/> 
                  <input
                    className='searchInput addModal'
                    type="text"
                    placeholder="Category"
                    value={this.state.category}
                    onChange={this.handleChangeCategory}/>  
                  <input className='addModalAdd button'type="button" value="Submit" onClick={this.handleSubmit}/>
                  <input className='addModalClose button' type="button" value="Close" onClick={() => this.closeModal()} />
                </div>   
              </Modal>
          </section>
      );
  }
}

function mapStateToProps(state) {
    const { ingredients } = state.ingredients;
    return {
        ingredients
    };
}
 
const connectedRegisterPage = connect(mapStateToProps)(AddModalButton);
export { connectedRegisterPage as AddModalButton };

// class Examples extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             visible : false
//         }
//     }

//     openModal() {
//         this.setState({
//             visible : true
//         });
//     }

//     closeModal() {
//         this.setState({
//             visible : false
//         });
//     }

//     render() {
//         return (
//             <section>
//                 <h1>React-Modal Examples</h1>
//                 <input type="button" value="Open" onClick={() => this.openModal()} />
//                 <Modal 
//                     visible={this.state.visible}
//                     width="400"
//                     height="300"
//                     effect="fadeInUp"
//                     onClickAway={() => this.closeModal()}
//                 >
//                     <div>
//                         <h1>Title</h1>
//                         <p>Some Contents</p>
//                         <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a>
//                     </div>
//                 </Modal>
//             </section>
//         );
//     }
// }

// export default AddModalButton