import React from 'react'
import RestaurantCard from './RestaurantCard'



function RestaurantCardList({restaurants, onQuickView}) {
    const listofRestaurants = restaurants.map(restaurant => {
    return (
        <RestaurantCard restaurant = {restaurant} key = {restaurant.id} onQuickView = {onQuickView}/>
    )
})
    return (
        <div className = "list">
            {listofRestaurants} 
        </div>
    )


}


export default RestaurantCardList
