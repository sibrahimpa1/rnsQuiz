import React, {Component} from 'react';
import './questionsWrap.scss';
import {Question} from '../question/question';

class QuestionsWrap extends Component{
  constructor(){
    super();
    this.state = {
      previousNum: 0,
      nextNum: 1,
      currNum: 0,
      questionNumber: 1,
      previousDisabled: true,
      nextDisabled: false,
      questions: [
        {
          id: 0,
          order: 1,
          visible: true,
          type: 'guessPerson',
          questionTitle: 'Navedite imena poznatih lica sa slika',
          content: [
            {
              image: "https://tekrabuilders.com/wp-content/uploads/2018/12/male-placeholder-image.jpeg",
              key: 0
            },
            {
              image: "https://tekrabuilders.com/wp-content/uploads/2018/12/male-placeholder-image.jpeg",
              key: 1
            },
            {
              image: "https://tekrabuilders.com/wp-content/uploads/2018/12/male-placeholder-image.jpeg",
              key: 2
            },
            {
              image: "https://tekrabuilders.com/wp-content/uploads/2018/12/male-placeholder-image.jpeg",
              key: 3
            },
            {
              image: "https://tekrabuilders.com/wp-content/uploads/2018/12/male-placeholder-image.jpeg",
              key: 4
            }
          ]
        },
        {
          id: 1,
          order: 2,
          visible: false,
          type: 'reorderItems',
          questionTitle: 'Sortiraj pojmove po nekom kriteriju..',
          content: [
            {
              text: "Some sort item..",
              key: 0
            },
            {
              text: "Some sort item 1..",
              key: 1
            },
            {
              text: "Some sort item 2..",
              key: 2
            },
            {
              text: "Some sort item 3..",
              key: 3
            },
            {
              text: "Some sort item 4..",
              key: 4
            }
          ]
        }
      ],
      numberOfQuestions: 2
    }
  }

  _moveToNext = (e) => {
    var currQuestion = this.state.currNum;
    var nextQuestion = this.state.nextNum;
    var isZeroActive = true;
    var isLastActive = false;
    
    if(nextQuestion+1 === this.state.numberOfQuestions) isLastActive = true;
    else isLastActive = false;
    if(nextQuestion === 0) isZeroActive = true;
    else isZeroActive = false;

    let questionsTemp = [...this.state.questions];
    let setNewValue = {
      ...questionsTemp[nextQuestion],
      visible: true
    }
    let removeOldValue = {
      ...questionsTemp[currQuestion],
      visible: false
    }
    questionsTemp[currQuestion] = removeOldValue;
    questionsTemp[nextQuestion] = setNewValue;
    this.setState({
      previousNum: this.state.previousNum + 1,
      nextNum: this.state.nextNum + 1,
      currNum: this.state.currNum + 1,
      questionNumber: this.state.questionNumber + 1,
      questions: questionsTemp,
      nextDisabled: isLastActive,
      previousDisabled: isZeroActive
    })
  }

  _backToPrev = (e) => {
    var currQuestion = this.state.currNum;
    var prevQuestion = this.state.currNum - 1;
    var isZeroActive = true;
    var isLastActive = false;
    
    if(currQuestion-1 === 0) isZeroActive = true;
    else isZeroActive = false;

    let questionsTemp = [...this.state.questions];
    let setNewValue = {
      ...questionsTemp[prevQuestion],
      visible: true
    }
    let removeOldValue = {
      ...questionsTemp[currQuestion],
      visible: false
    }
    questionsTemp[currQuestion] = removeOldValue;
    questionsTemp[prevQuestion] = setNewValue;
    this.setState({
      previousNum: this.state.previousNum - 1,
      nextNum: this.state.nextNum - 1,
      currNum: this.state.currNum - 1,
      questionNumber: this.state.questionNumber - 1,
      questions: questionsTemp,
      previousDisabled: isZeroActive,
      nextDisabled: isLastActive
    })
  }

  _renderQuestion = (question) => {
    var questionObject = this.state.questions[question];
    return(
      <Question questionData={questionObject}/>
    )
  }

  render(){
    const { questionNumber, questions, previousDisabled, nextDisabled} = this.state;
    var questionID;
    return(
      <div className="container questions-wrap">
      <div className="question-number">{questionNumber}.</div>
      <div className="content">

        <div className="questions">
          {
            questions.map(question => {
              if(question.visible) questionID = question.id;
            })    
          }
          {
            this._renderQuestion(questionID)
          }
        </div>

        <div className="questions-nav">
          <button className="btn btn-red" disabled={previousDisabled} onClick={(e) => this._backToPrev()}>Previous</button>
          <button className="btn btn-blue" disabled={nextDisabled} onClick={(e) => this._moveToNext()}>Next</button>
        </div>
      </div>
    </div>  
    )
  }

}

export default QuestionsWrap;