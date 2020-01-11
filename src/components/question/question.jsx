import React from 'react';
import './question.scss';

export const Question = (props) => {
  var type = props.questionData.type;
  var title = props.questionData.questionTitle;
  var content = props.questionData.content;
  var answers = props.answersData;
  var answersVisible = props.answersVisible;
  return(
    <div className="question type1 guessPerson">
      <div className="question__title">{title}</div>
      <div className="question__content">
       
        { type === "guessPerson" &&
          <div className="people">
          {
            content.map(item => {
              return <img key={item.key} src={item.image} alt="person"/>
            })  
          }
          </div>
        }

        { type === "reorderItems" &&
          <div className="items-list">
          {
            content.map(item => {
              return <div key={item.key} className="text">{item.text}</div>
            })  
          }
          </div>
        }

        {answersVisible &&
          <div className="answers">
            <button className="close-answers" onClick={(e) => props.closeAnwsers()}><i className="fa fa-times"></i></button>
            <h5>{answers.title}:</h5>
            {
              answers.answer.map((answer,i) => {
                return <div className="answer-item" key={i}>{answer}</div>
              })  
            }
          </div>
        }

      </div>
    </div>
  )
}