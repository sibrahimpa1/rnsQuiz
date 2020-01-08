import React from 'react';
import './modal.css';

export const Modal = (props) => {
  console.log(props);
  
  return(
    <div className="container modal">
      <button className="close-modal" onClick={(e) => props.closeModal(e)}><i className="fa fa-times"></i></button>
      <div className="content">
        <div className="modal-text">{props.modalData.modalText}</div>
      </div>
    </div>
  )
}