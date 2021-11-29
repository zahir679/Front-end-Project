import React from 'react';
import { useState, useEffect } from 'react';
import './Containers.css';

import RestaurantCardList from '../components/RestaurantCardList';
import PopupCard from '../components/PopupCard';

const HomeContainer = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [popupShown, setPopupShown] = useState(null);

    const getRestaurantData = () => {
        fetch("http://localhost:8080/restaurant/allRestaurants")
            .then(response => response.json())
            .then(data => setRestaurants(data));
    }

    useEffect(() => {
        getRestaurantData();
        setPopupShown(false);
    }, []);

    // || ========= Popup Methods ========== ||

    const showPopup = () => {
        setPopupShown(true)
      }
    
      const hidePopup = () => {
        setPopupShown(false)
      }

    // || ========= ============= ========== ||

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
            
            <img class ='heroImage' src='https://media.discordapp.net/attachments/913726718169194496/914889207376404530/Logo3.png'/>
            
            <RestaurantCardList restaurants={restaurants} onClick={showPopup}
                onRestaurantCompletion={updateRestaurantCompletion}/>
            <hr/>

            <PopupCard show={popupShown} handleClose={hidePopup}>
                <p>Modal</p>
            </PopupCard>       
        </>
    )

}

export default HomeContainer
