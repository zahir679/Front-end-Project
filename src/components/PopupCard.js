import './PopupCard.css'


const PopupCard = ({ handleClose, show, children}) => {
    const showHideClassName = show ? "popup display-block" : "popup display-none";

    return (
      <div className={showHideClassName}>
        <section className="popup-main">
          {children}
          <button type="button" onClick={handleClose}>
            Close
          </button>
        </section>
      </div>
    );
  };

export default PopupCard;