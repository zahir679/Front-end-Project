import React from 'react'
import RestaurantCardList from '../components/RestaurantCardList'
import { useState, useEffect } from 'react';

const HomeContainer = () => {
    const [restaurants, setRestaurants] = useState([]);

    const getRestaurantData = () => {
        fetch("http://localhost:8080/restaurant/allRestaurants")
            .then(response => response.json())
            .then(data => setRestaurants(data));
}
useEffect(getRestaurantData, []);

const addNewRestaurant = (newRestaurant) => {
    fetch("http://localhost:8080/restaurant", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newRestaurant)
    })
        .then(getRestaurantData);
}

const updateRestaurantCompletion = (id) => {
    console.log("updating restaurant " + id);
    const restaurantToUpdate = restaurants.find(restaurant => restaurant.id === id);
    restaurantToUpdate.completed = true;

    fetch(`http://localhost:8080/tasks/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(restaurantToUpdate)
    })
        .then(getRestaurantData);
}
return(
    <>
        {/* <NewRestaurantForm onRestuarantSubmission={addNewRestaurant}/> */}
        <hr/>
        <RestaurantCardList restaurants={restaurants} onRestaurantCompletion={updateRestaurantCompletion}/>
    </>
)

}

export default HomeContainer