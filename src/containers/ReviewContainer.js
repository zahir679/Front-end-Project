import ReviewForm from '../components/ReviewContent/ReviewForm'
import {useState, useEffect} from 'react';



const ReviewContainer = () => {
    const [restaurants, setRestaurants] = useState([]);


    const getRestaurantData = () => {
        fetch("http://localhost:8080/restaurant/allRestaurants")
            .then(response => response.json())
            .then(data => setRestaurants(data));
    }

    useEffect(() => {
        getRestaurantData();
    });


    const selectRestaurants = ()=>{
        const newList = [...restaurants]
        const restaurantToShow = newList.find(restaurants => restaurants.name.length>0);
        setRestaurants(restaurantToShow)
    }





        return(
        <ReviewForm restaurants={restaurants} />
        )
    }

export default ReviewContainer;