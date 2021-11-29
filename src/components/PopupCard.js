import './PopupCard.css'


const PopupCard = ({ onClick, show, children}) => {
    const showHideClassName = show ? "popup display-block" : "popup display-none";

    return (
      <div className={showHideClassName} onClick={onClick}>
        <section className="popup-main">
          {children}

          {/* <button type="button" onClick={handleClose}>
            Close
          </button> */}

        </section>
      </div>
    );
  };

export default PopupCard;