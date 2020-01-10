import React from 'react';
import './question.scss';

export const Question = (props) => {

    console.log(props);
    
  var type = props.questionData.type;
  var title = props.questionData.questionTitle;
  var content = props.questionData.content;

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

      </div>
    </div>
  )
}