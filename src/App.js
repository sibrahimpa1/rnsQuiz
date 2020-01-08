import React, { Component } from 'react';
import './App.scss';
import {Header} from './components/header/header';
import {Start} from './components/start/start';
import {Modal} from './components/modal/modal';

class App extends Component{
  constructor(){
    super();
    this.state = {
      showModal: false,
      modalNumberValue: -1,
      jokerModal: {
        modalText: 'senka1'
      }
    }
  }
  _handleShowModal = (modalNumberValue) => {
    this.setState({
      modalNumberValue: modalNumberValue,
      showModal: true
    })
  }
  _handleCloseModal = () => {
    this.setState({
      modalNumberValue: -1,
      showModal: false
    })  
  }
  render(){
    const {showModal, modalNumberValue, jokerModal} = this.state;
    return (
      <div className="app">
        { showModal && 
          <Modal 
            modalVisible={showModal} 
            modalData={jokerModal} 
            closeModal={this._handleCloseModal}/>
        }
        <Header showModal={this._handleShowModal}/>
        <div className="app__content">
          <Start/>
        </div>
      </div>
    );
  }
}

export default App;
