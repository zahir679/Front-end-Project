import './PopupCard.css'
import ReviewCardList from './ReviewCardList';


const PopupCard = ({ restaurant, onClick, show }) => {
    const showHideClassName = show ? "popup display-block" : "popup display-none";

    return (
      <div className={showHideClassName}>
        <section className="popup-main">
          
          <button onClick={onClick}>Close</button>
          
          <div>
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
          <a href="/LeaveAReview">Leave a Review!</a>
          {/* {console.log(restaurant.reviews[0].comment)} */}
          
          <h4>reviews:</h4>
          <ReviewCardList reviews={restaurant.reviews} />




          {/* <button type="button" onClick={handleClose}>
            Close
          </button> */}

          </div>
        </section>
      </div>
    );
  };

export default PopupCard;