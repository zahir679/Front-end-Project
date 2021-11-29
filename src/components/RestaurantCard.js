import React from 'react'
import './Components.css'

function RestaurantCard({restaurant, onQuickView}) {
    return(
        <div className="restaurantCard">
            <h3>Name:</h3>
            <p>{restaurant.restaurantName}</p>
            <h4>Address</h4>
            <p>{restaurant.address}</p>
            <h4>Cuisine</h4>
            <p>{restaurant.cuisine}</p>
            <h4>Price</h4>
            <p>{restaurant.price}</p>
            <h4>Vegetarian?</h4>
            <p>{restaurant.vegetarian ? "Yes" : "No"}</p>
            <h4>Halal?</h4>
            <p>{restaurant.halal ? "Yes" : "No"}</p>
            <h4>Gluten free?</h4>
            <p>{restaurant.glutenfree ? "Yes" : "No"}</p>
            <h4>Average Rating</h4>
            <p>{restaurant.averageRating}</p>
            <button onClick={() => onQuickView(restaurant.id)}>Show in quick view</button>
            <hr/>
        </div>
    )
}

export default RestaurantCard
