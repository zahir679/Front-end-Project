import React from 'react';
import { useState, useEffect } from 'react';
import './Containers.css';

import RestaurantCardList from '../components/RestaurantCardList';
import PopupCard from '../components/PopupCard';
import Filter from '../components/Filter'
import { Checkbox } from '@mui/material';

const HomeContainer = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [popupShown, setPopupShown] = useState(null);
    const [shownRestaurant,setShownRestaurant] = useState(null);
    const [halal, setHalal] = useState(false);


    const updateHalalFilter = () => {
        setHalal(!halal)
    }
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

    const selectRestaurant = (id)=>{
        const newList = [...restaurants]
        const restaurantToShow = newList.find(restaurant => restaurant.id === id);
        setShownRestaurant(restaurantToShow)
    }

    const showPopup = (id) => {
        selectRestaurant(id)
        setPopupShown(true)
      }
    
      const hidePopup = () => {
        setPopupShown(false)
      }

    // || ========= ============= ========== ||


    

        //===================||

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

    const filterRestaurants = () => {
        if (halal){
            return restaurants.filter(restaurant => {
                return restaurant.halal 
            })
        }
        return restaurants
    }
    return(
        <>
            {/* <NewRestaurantForm onRestuarantSubmission={addNewRestaurant}/> */}
            
            <img class ='heroImage' id="HeroImage" src='https://media.discordapp.net/attachments/913726718169194496/914889207376404530/Logo3.png'/>
            <Filter updateHalalFilter = {updateHalalFilter} halal = {halal}/>

            <RestaurantCardList restaurants={filterRestaurants()} onClick={selectRestaurant,showPopup}
                onRestaurantCompletion={updateRestaurantCompletion}/>
            <hr/>
            
            {/* below replaces ternary operator */}
            {(() => {
                if (shownRestaurant) {
                    return (
                        <PopupCard  restaurant ={shownRestaurant} show={popupShown} onClick={hidePopup} />
                    )
                }
            })()}
        </>
    )

}

export default HomeContainer;
