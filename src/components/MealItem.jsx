import React, { useContext } from 'react';
import { currencyFormatter } from "../util/formatting.js";
import { CartContext } from '../store/Cart.jsx';
import Button from './UI/Button.jsx';

const MealItem = ({meal}) => {
  const { addToCart } = useContext(CartContext);
  return (
    <li className='meal-item'>
        <article>
            <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
            <div>
                <h3>{meal.name}</h3>
                <p className='meal-item-price'>{currencyFormatter.format(meal.price)}</p>
                <p className='meal-item-description'>{meal.description}</p>
            </div>
            <p className='meal-item-actions'>
                <Button onClick={() => addToCart(meal)}>Add to Cart</Button>
            </p>
        </article>
    </li>
  );
}

export default MealItem;