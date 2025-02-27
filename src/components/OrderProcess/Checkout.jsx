import React, { useContext, useState } from 'react';
// Components
import Input from '../Input';
import Modal from '../UI/Modal';
import Button from '../UI/Button';
// Context
import UserProgressContext from '../../store/UserProgressContext';
import { CartContext } from '../../store/Cart';

import { postCheckout } from '../../http';
import { currencyFormatter } from '../../util/formatting';

const Checkout = () => {
  const { getCartTotal, cartItems, clearCart } = useContext(CartContext);
  const totalPrice = getCartTotal();
  const userProgressCtx = useContext(UserProgressContext);

  const [orderData, setOrderData] = useState({
    name: '',
    email: '',
    street: '',
    ['postal-code']: '',
    city: ''
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    
    if (!orderData.name) tempErrors.name = "Name is required.";
    if (!orderData.email) {
      tempErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(orderData.email)) {
      tempErrors.email = "Email format is invalid.";
    }
    if (!orderData.street) tempErrors.street = "Street is required.";
    if (!orderData['postal-code']) {
      tempErrors['postal-code'] = "Postal code is required.";
    } else if (!/^\d{5}$/.test(orderData['postal-code'])) {
      tempErrors['postal-code'] = "Postal code must be 5 digits.";
    }
    if (!orderData.city) tempErrors.city = "City is required.";

    setErrors(tempErrors);
    
    return Object.keys(tempErrors).length === 0;
  };
    
  function handleSubmit(e) {
    e.preventDefault();

    if (validate()) {
      try {
        const filteredCartItems = cartItems.map(({ id, name, price, quantity }) => ({
          id,
          name,
          price,
          quantity
        }));

        postCheckout({customer: {...orderData}, items: filteredCartItems}
        );
        clearCart();
        setOrderData({
          name: '',
          email: '',
          street: '',
          ['postal-code']: '',
          city: ''
        })

        console.log("Form submitted successfully!", orderData);
        handleSuccess();
      } catch (error) {
        console.log("Error while posting.");
      }
    } else {
      console.log("Validation failed!", errors);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderData((prevState) => ({ ...prevState, [name]: value }));
  };

  function handleCloseCheckout() {
    userProgressCtx.hideCheckout();
  }

  function handleSuccess() {
    userProgressCtx.showSuccess();
  }
  
  return (
    <Modal className='cart' open={userProgressCtx.progress === 'checkout'}>
      <p>Cart Total: {currencyFormatter.format(totalPrice)}</p>
      <form onSubmit={handleSubmit} className='control' >
        <Input label="Full Name" id="name" value={orderData.name} onChange={handleChange} />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}

        <Input label="E-mail Address" id="email" value={orderData.email} onChange={handleChange} />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

        <Input label="Street" id="street" value={orderData.street} onChange={handleChange} />
        {errors.street && <p style={{ color: "red" }}>{errors.street}</p>}

        <Input label="Postal Code" id="postal-code" value={orderData['postal-code']} onChange={handleChange} />
        {errors['postal-code'] && <p style={{ color: "red" }}>{errors['postal-code']}</p>}

        <Input label="City" id="city" value={orderData.city} onChange={handleChange} />
        {errors.city && <p style={{ color: "red" }}>{errors.city}</p>}
      
      <p className='modal-actions'>
        <Button textOnly onClick={handleCloseCheckout}>Close</Button>
        <Button type="submit">Submit Order</Button>
      </p>
      </form>

      
    </Modal>
  );
}

export default Checkout;