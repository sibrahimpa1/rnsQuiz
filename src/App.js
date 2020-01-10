import React, { Component } from 'react';
import './App.scss';
import {Header} from './components/header/header';
import {Start} from './components/start/start';
import {Modal} from './components/modal/modal';
import QuestionsWrap from './components/questionsWrap/questionsWrap';

class App extends Component{
  constructor(){
    super();
    this.state = {
      showModal: false,
      quizStarted: false,
      modalNumberValue: -1,
      modalOpened: 0,
      modals: [
        {
          modalText: 'upute za jokereeee'
        },
        {
          modalText: 'pravila igrice'
        }
      ]
    }
  }
  _handleShowModal = (modalType) => {
    var modalOpened;
    if(modalType === 'jokersModal') modalOpened = 0;
    else modalOpened = 1;

    this.setState({
      showModal: true,
      modalOpened: modalOpened
    })
  }
  _handleCloseModal = () => {
    this.setState({
      modalNumberValue: -1,
      showModal: false
    })  
  }
  _startQuiz = () => {
    this.setState({
      quizStarted: !this.state.quizStarted
    })
  }

  render(){
    const {showModal, modals, quizStarted, modalOpened} = this.state;
    return (
      <div className="app">

        { showModal && 
          <Modal 
            modalVisible={showModal} 
            modalData={modals[modalOpened]} 
            closeModal={this._handleCloseModal}/>
        }

        <Header showModal={this._handleShowModal}/>
        <div className="app__content">
          { !quizStarted &&
            <Start runQuiz={this._startQuiz}/>
          }
          { quizStarted &&
            <QuestionsWrap/>
          }
        </div>

      </div>
    );
  }

}
export default App;
