import React from 'react'
import RestaurantCard from './RestaurantCard'



function RestaurantCardList({ restaurants, onClick }) {
    const listofRestaurants = restaurants.map(restaurant => {
    return (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} onClick={onClick}/>
    )
})
    return (
        <div className = "list">
            {listofRestaurants} 
        </div>
    )


}


export default RestaurantCardList
