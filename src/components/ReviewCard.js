
const ReviewCard = ({ review }) => {

    return (
        <div className="ReviewCard">
            <h3>Rating:</h3>
            <p>{review.rating}</p>
            <h3>Comment:</h3>
            <p>{review.comment}</p>
        </div>
        
    )
}

export default ReviewCard