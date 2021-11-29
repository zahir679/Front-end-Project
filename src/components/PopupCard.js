import './PopupCard.css'


const PopupCard = ({ onClick, show }) => {
    const showHideClassName = show ? "popup display-block" : "popup display-none";

    return (
      <div className={showHideClassName} onClick={onClick}>
        <section className="popup-main">
          <h2>Restaurant Popup</h2>
          <p>Details</p>
          <p>Reviews</p>





          {/* <button type="button" onClick={handleClose}>
            Close
          </button> */}

        </section>
      </div>
    );
  };

export default PopupCard;