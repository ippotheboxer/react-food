import React, { useEffect, useState } from 'react';
import {getMeals} from "../http.js";

const Meals = () => {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        async function getMealsResponse() {
            const response = await getMeals();
            setMeals(response);  
        }
        getMealsResponse();
    }, [])
    
    
    return (
    <div id='meals'>
        {meals.map(meal => (
            <div className='meal-item' key={meal.id}>
                <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
                <h3>{meal.name}</h3>
                <p className='meal-item-price'>{meal.price}</p>
                <p className='meal-item-description'>{meal.description}</p>
                <button className='meal-item-actions button'>Add to cart</button>
            </div>
        ))}
    </div>
  );
}

export default Meals;