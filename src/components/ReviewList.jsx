import React from "react"
import Review from "./Review.jsx"
import {useEffect} from 'react'
import {useState} from 'react'
import database from '../firebase'

/*
let reviews = [{
    movieTitle: "Interstellar",
    url: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
    reviewContent: "I love this movie. It holds a very special place in my heart. The story was excellent and the visuals were amazing.",
    stars: "5"
}, {
    movieTitle: "Your Name",
    url: "https://upload.wikimedia.org/wikipedia/en/0/0b/Your_Name_poster.png",
    reviewContent: "One of the best animated films I've seen. Ever.",
    stars: "5"
}, {
    movieTitle: "La La Land",
    url: "https://upload.wikimedia.org/wikipedia/en/a/ab/La_La_Land_%28film%29.png",
    reviewContent: "Got me singing the songs all the time!",
    stars: "5"
}]*/


const ReviewList = (props) => {
    const [reviewList, setReviewList] = useState([])

    //get all reviews for the user
    useEffect(() => 
        database.ref(`users/${props.googleObj.googleId}/movieReviews`).on("value", (snapshot) =>{
            let myReviews = []
            if (snapshot != null){
                snapshot.forEach(data => {
                    let review = {
                        db_key: data.key,
                        db_key_2: data.val().db_key_2,
                        API_id: data.val().API_id,
                        title: data.val().title,
                        reviewContent: data.val().review,
                    }
                    myReviews.push(review)
                })
            }
            setReviewList(myReviews)
        })
    ,[])

    return (
        <div className="ReviewList">
            <div className = "movieListTitle">My Recent Reviews</div>
            {reviewList.map ((review) => (
            <Review googleObj={props.googleObj} db_key={review.db_key} db_key_2={review.db_key_2} API_id={review.API_id} movieTitle={review.title}
            reviewContent={review.reviewContent}/>
            ))}
        </div>
    )
}

export default ReviewList