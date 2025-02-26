import React from 'react';
import logoImg from "../assets/logo.jpg";
import Cart from './Cart';

const Header = () => {
  return (
    <header id='main-header'>
        <h1 id='title'>
        ReactFood
        <img src={logoImg} alt="React Food logo" />
        </h1> 
    </header>    
  );
}

export default Header;