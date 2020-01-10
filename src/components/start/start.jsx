import React from 'react';
import './start.scss';

export const Start = (props) => {
  return(
    <div className="container inital-screen">
      <div className="content">
        <h1>RNS<br/>&<br/>Homework Hub<br/>Quiz</h1>
        <button className="btn btn-red" onClick={(e) => props.runQuiz()}>Start</button>
      </div>
    </div>
  )
}