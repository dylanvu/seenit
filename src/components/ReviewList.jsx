import React from "react"
import Review from "./Review.jsx"

let reviews = [{
    movieTitle: "Interstellar",
    url: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
    reviewContent: "I love this movie. It holds a very special place in my heart.",
    stars: "5"
}, {
    movieTitle: "Your Name",
    url: "https://upload.wikimedia.org/wikipedia/en/0/0b/Your_Name_poster.png",
    reviewContent: "One of the best I've seen. Ever.",
    stars: "5"
}, {
    movieTitle: "La La Land",
    url: "https://upload.wikimedia.org/wikipedia/en/a/ab/La_La_Land_%28film%29.png",
    reviewContent: "Got me singing all the time after the musical!",
    stars: "5"
}]


const ReviewList = () => {
    return (
        <div className="ReviewList">
            {reviews.map ((review) => (
            <Review movieTitle = {review.movieTitle}
            reviewContent = {review.reviewContent}
            stars = {review.stars}/>
            ))}
        </div>
    )
}

export default ReviewList