import React from 'react';
import './header.scss';
import Logo from '../../img/logo.svg';

export const Header = (props) => {
  return(
    <header className="header">
      <div className="content">
        <div className="logo"><img src={Logo} alt="Logo"/></div>
        <ul className="jokers">
          <li><button onClick={(e) => props.showModal()}><span><i className="fa fa-angle-right"></i>Jokers</span></button></li>
          <li><button onClick={(e) => props.showModal()}><span><i className="fa fa-angle-right"></i>Rules</span></button></li>
        </ul>
      </div>
    </header>
  )
}