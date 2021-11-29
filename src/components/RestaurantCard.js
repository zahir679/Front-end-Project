import React from 'react'
import './Components.css'



function RestaurantCard({restaurant, onQuickView}) {
    let imageChoice = 'Default'
    switch(restaurant.cuisine){
    case 'Chicken':imageChoice='Chicken.jpeg'; break;
    case 'Japanese':imageChoice='https://www.azamara.co.uk/sites/default/files/heros/gettyimages-1066110176.jpg'; break;
    
    case 'Korean':imageChoice='https://www.thespruceeats.com/thmb/2sIsaW9T1SzmiMs7uJ0EXn6JDio=/3060x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/classic-korean-bibimbap-recipe-2118765-step-011-acab906539594dc9a668c7fbb753c43d.jpg'; break;
    case 'American':imageChoice='American'; break;
    case 'Kebab':imageChoice='Kebab'; break;
    case 'Mexican':imageChoice='Mexican'; break;
    case 'Bakery':imageChoice='Bakery'; break;
    case 'Chinese':imageChoice='Chinese'; break;
    case 'Indian':imageChoice='Indian'; break;
    case 'Hamburger':imageChoice='Hamburger'; break;
    case 'Italian':imageChoice='Italian'; break;
    case 'French':imageChoice='French'; break;


}
    
    return(
        <div className="restaurantCard">
            <img class="cuisineImage" src={imageChoice} alt='Picture of food'/>
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
