import React, { Component } from 'react';
import Modal from 'react-awesome-modal';

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
        var obj = [];
      obj.push({category:this.state.category, name:this.state.name})
      console.log(obj)
    }    

    render() {
        return (
            <section>
                <input type="button" value="Add Ingredients" onClick={() => this.openModal()} />
                <Modal 
                    visible={this.state.visible}
                    width="600"
                    height="600"
                    effect="fadeInUp"
                    onClickAway={() => this.closeModal()}
                >
                    <div>
                        <h1>Title</h1>
                        <p>Some Contents</p>
                          <input
                            className='search'
                            type="text"
                            placeholder="Name"
                            value={this.state.name}
                            onChange={this.handleChangeName}/> 
                          <input
                            className='search'
                            type="text"
                            placeholder="Category"
                            value={this.state.category}
                            onChange={this.handleChangeCategory}/>  
                          <input type="button" value="Submit" onClick={this.handleSubmit}/>
                        <input type="button" value="Close" onClick={() => this.closeModal()} />
                    </div>
                </Modal>
            </section>
        );
    }
}

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

export default AddModalButton