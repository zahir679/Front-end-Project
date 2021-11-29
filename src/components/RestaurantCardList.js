import React from 'react'
import RestaurantCard from './RestaurantCard'



function RestaurantCardList({ restaurants }) {
    const listofRestaurants = restaurants.map(restaurant => {
    return (
        <RestaurantCard restaurant={restaurant} key={restaurant.id} />
    )
})
    return (
        <div className = "list">
            {listofRestaurants} 
        </div>
    )


}


export default RestaurantCardList
