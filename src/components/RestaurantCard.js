import React from 'react'

function RestaurantCard({restaurant}) {
    return(
        <div className={restaurantCard}>
            <h3>Name:</h3>
            <p>{restaurant.restaurantName}</p>
            <h4>Address</h4>
            <p>{restaurant.address}</p>
            <h4>Cuisine</h4>
            <p>{restaurant.cuisine}</p>
            <h4>Price</h4>
            <p>{restaurant.price}</p>
            <h4>Vegetarian?</h4>
            <p>{restaurant.vegetarian}</p>
            <h4>Halal?</h4>
            <p>{restaurant.halal}</p>
            <h4>Glutenfree?</h4>
            <p>{restaurant.glutenfree}</p>
            <h4>averageRating</h4>
            <p>{restaurant.averageRating}</p>
            <hr/>
            <button onClick={() => onQuickView(restaurant.id)}>Show in quick view</button>
        </div>
    )
}

export default RestaurantCard
