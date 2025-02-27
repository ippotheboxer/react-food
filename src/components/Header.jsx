import React from 'react';
import logoImg from "../assets/logo.jpg";
import { useContext } from 'react';
import { CartContext } from '../store/Cart';

import Button from './UI/Button';
import UserProgressContext from '../store/UserProgressContext';

const Header = () => {
  const { cartItems } = useContext(CartContext);

  const userProgressCtx = useContext(UserProgressContext);

  function handleShowCart() {
    userProgressCtx.showCart();
  }

  return (
  <header id='main-header'>
    <div id='title'>
      <img src={logoImg} alt="React Food logo" />
      <h1>ReactFood</h1>
    </div>
    <Button textOnly onClick={handleShowCart}>
      Cart ({cartItems.reduce((accum,item) => accum + item.quantity, 0)})
    </Button>
    </header>    
  );
}

export default Header;