import './PopupCard.css'


const PopupCard = ({ restaurant, onClick, show }) => {
    const showHideClassName = show ? "popup display-block" : "popup display-none";
    const reviewList = restaurant.reviews.map(x => (<p>{x}</p>))

    return (
      <div className={showHideClassName} onClick={onClick}>
        <section className="popup-main">
          <h3>Name:</h3>
          <p>{restaurant.restaurantName}</p>
          {/* <h4>Address</h4>
          <p>{restaurant.address}</p>
          <h4>Cuisine</h4>
          <p>{restaurant.cuisine}</p>
          <h4>Price</h4>
          <p>{restaurant.price}</p> */}
          <h4>Vegetarian?</h4>
          <p>{restaurant.vegetarian ? "Yes" : "No"}</p>
          <h4>Halal?</h4>
          <p>{restaurant.halal ? "Yes" : "No"}</p>
          <h4>Gluten free?</h4>
          <p>{restaurant.glutenfree ? "Yes" : "No"}</p>
          <h4>Average Rating</h4>
          <p>{restaurant.averageRating}</p>
          
          <h4>reviews:</h4>
          { reviewList}




          {/* <button type="button" onClick={handleClose}>
            Close
          </button> */}

        </section>
      </div>
    );
  };

export default PopupCard;