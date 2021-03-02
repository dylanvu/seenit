import React from 'react'
import {useState} from 'react'
import database from '../firebase'
import {useEffect} from 'react'
import Review from "./Review.jsx"
// Props should likely have properties:
// URL (for image poster)
// Name (For movie title)
// Summary? Director? Writer? Actors? Not sure how this will work. Likely depends on how the data we obtain is formatted

const MoviePage = (props) => {

    const[review, setReview] = useState("")
    const[allReview, setAllReview] = useState([])

    //get all reviews for this movie
    useEffect(() => 
        database.ref(`movieReviews/lalaland`).on("value", (snapshot) =>{
            let reviews = []
            if (snapshot != null){
                snapshot.forEach(data => {
                    let review = {
                        id: data.key,
                        user: data.val().user.givenName + ' ' + data.val().user.familyName ,
                        movieTitle: "La la land",
                        reviewContent: data.val().review,
                        stars: 5
                    }
                    reviews.push(review)
                })
            }
            setAllReview(allReview.concat(reviews))
        })
    ,[]) 

    //get text from the text box
    function getData(val){
        setReview(val.target.value)
    }

    //save new review to the data base 
    function saveReview(){
        if (props.googleObj != null){
            database.ref(`/users/${props.googleObj.googleId}/movieReviews`).push(
                {
                    movie: "La la Land",
                    review: review
                }
            )
            database.ref(`/movieReviews/lalaland`).push(
                {
                    user: props.googleObj,
                    review: review
                }
            )
            setReview("")
        }
        else{
            console.log("object null");
        }
    }

    return (
        <div className="MoviePageFlex">
            <div className="MovieImage">
                <img src="https://images-na.ssl-images-amazon.com/images/I/61pVLV%2Bz11L._AC_SL1162_.jpg" alt="Movie Poster" className="MoviePagePoster" />
            </div>
            <div className="MovieContent">
                <h1>La La Land</h1>
                <p>
                    While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.
                </p>
                <h2>Director:&nbsp;
                    <span>Joe Director</span>
                </h2>
                <h2>Writer:&nbsp;
                    <span>Joe Writer</span>
                </h2>
                <h2>Starring:&nbsp;
                    <span>Ryan Gosling</span>
                </h2>
                <div>
                    <div>
                        <h1>Write a review</h1>
                    </div>
                    <div className="WriteReviewContainer">
                        <div className="WriteReview">
                            <textarea className="textarea" name="text" wrap="soft" onChange={getData} value={review}/>
                            <button className="AddReviewButton" onClick={saveReview}> Save Review </button>
                        </div>
                    </div>
                    <br/>
                    <div>
                        <h1>All reviews</h1>
                    </div>
                    {allReview.map ((review) => (
                        <Review user = {review.user}
                        reviewContent = {review.reviewContent}
                        stars = {review.stars}/>
                    ))}
                </div> 
            </div>
        </div>
    )
}

export default MoviePage