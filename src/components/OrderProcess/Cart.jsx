import React from 'react';
import { CartContext } from '../../store/Cart';
import { useContext } from 'react';
import Modal from '../UI/Modal';
import { currencyFormatter } from '../../util/formatting';
import Button from '../UI/Button';
import UserProgressContext from '../../store/UserProgressContext';

const Cart = ({}) => {
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useContext(CartContext)
  const totalPrice = getCartTotal();

  const userProgressCtx = useContext(UserProgressContext);

  function handleCloseCart() {
    userProgressCtx.hideCart();
  }

  function handleGoToCheckout() {
    userProgressCtx.showCheckout();
  }

  return (
    <Modal className='cart' open={userProgressCtx.progress === 'cart'}>
        <h2>Your cart</h2>
        <ul>{cartItems.map(cartItem => (
          <li key={cartItem.name} className='cart-item'>
            <p>{cartItem.name} - {cartItem.quantity} x ${cartItem.price}</p>
            <div className='cart-item-actions'>
              <button onClick={() => addToCart(cartItem)}>+</button>
              <p>{cartItem.quantity}</p>
              <button onClick={() => removeFromCart(cartItem)}>-</button>
            </div>
          </li>
        ))}
        </ul>
        <h2 className='cart-total'>{currencyFormatter.format(totalPrice)}</h2>
        <p className='modal-actions'>
          <Button textOnly onClick={handleCloseCart}>Close</Button>
          <Button onClick={cartItems.length !== 0 ? handleGoToCheckout : undefined}>Go to Checkout</Button>
        </p>
      </Modal>
  );
}

export default Cart;