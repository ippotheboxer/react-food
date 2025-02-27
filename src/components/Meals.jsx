import React, { useEffect, useState } from 'react';
import { getMeals } from "../http.js";
import MealItem from './MealItem.jsx';

const Meals = () => {
    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function getMealsResponse() {
            setIsLoading(true);
            const response = await getMeals();
            setMeals(response);
            setIsLoading(false);  
        }

        try {
           getMealsResponse(); 
           setError(false);
        } catch (error) {
            console.log(error.message);
            setError(true);
        }
    }, [])
    
    
    return (
    <div id='meals'>
        {isLoading && <p>Loading meals...</p>}
        {error && <p>Error getting meals.</p>}
        {meals.map(meal => (
            <MealItem key={meal.id} meal={meal} />
        ))}
    </div>
  );
}

export default Meals;