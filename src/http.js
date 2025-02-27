export async function getMeals() {
    const response = await fetch('http://localhost:3000/meals');
    const resData = await response.json();    
    
    if (!response.ok) {
        throw new Error('Failed to fetch meals.');
    }

    return resData;
}

export async function postCheckout(orderData) {
    const response = await fetch('http://localhost:3000/orders', {
        method: "POST",
        body: JSON.stringify({ order: orderData }),
        headers: { 'Content-type': 'application/json' }
    });

    const resData = await response.json();
    if (!response) {
        throw new Error('Failed to update user data.');
    }

    return resData.message;
}