import React from "react"
import Review from "./Review.jsx"

let review = {
    movieTitle: "Interstellar",
    reviewContent: "",
    stars: "5"
}

const ReviewList = () => {
    return (
        <div>
            <Review movieTitle = {review.movieTitle} 
            reviewContent = {review.reviewContent}
            stars = {review.stars}
            />
        </div>
    )
}

export default ReviewList