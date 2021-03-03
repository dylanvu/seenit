import React from 'react'
import Axios from 'axios'
import { useState, useEffect } from 'react'
import database from '../firebase'
import Review from "./Review.jsx"
// Props should likely have properties:
// URL (for image poster)
// Name (For movie title)
// Summary? Director? Writer? Actors? Not sure how this will work. Likely depends on how the data we obtain is formatted

const API_KEY = process.env.REACT_APP_THEMOVIESDB_API_KEY
const IMG_API = 'https://image.tmdb.org/t/p/w1280';

const MoviePage = (props) => {

    const[review, setReview] = useState("")
    const[allReview, setAllReview] = useState([])
    const [movie, setMovie] = useState([])
    console.log("MoviePage props: " + props.API_id)

    const SEARCH_API = 'https://api.themoviedb.org/3/movie/' + props.API_id + "?api_key=" + API_KEY;

    //get all reviews for this movie
    useEffect(() => 
        database.ref(`movieReviews/${props.API_id}`).on("value", (snapshot) =>{
            let reviews = []
            if (snapshot != null){
                snapshot.forEach(data => {
                    let review = {
                        key: data.key,
                        API_id: data.val().API_id,
                        user: data.val().user.givenName + ' ' + data.val().user.familyName,
                        reviewContent: data.val().review,
                        stars: 5
                    }
                    reviews.push(review)
                })
            }
            setAllReview(allReview.concat(reviews))
        })
    ,[]) 

    useEffect(() => {
        async function getMoviebyID() {
            let result = await Axios.get(SEARCH_API);
            console.log(result);
            setMovie(result.data)
        }
        getMoviebyID(props.API_id)
    },[])

    //get text from the text box
    function getData(val){
        setReview(val.target.value)
    }

    //save new review to the data base 
    function saveReview(){
        if (props.googleObj != null){
            database.ref(`/users/${props.googleObj.googleId}/movieReviews`).push(
                {
                    API_id: props.API_id,
                    title: movie.title,
                    review: review
                }
            )
            database.ref(`/movieReviews/${props.API_id}`).push(
                {
                    API_id: props.API_id,
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
                <img src={IMG_API + movie.poster_path} alt={"Movie Poster of " + movie.title} className="MoviePagePoster" />
            </div>
            <div className="MovieContent">
                <h1>{movie.title}</h1>
                <p>
                    {movie.overview}
                </p>
                <div>
                    <div>
                        <h1>Write a review</h1>
                    </div>
                    <div className="WriteReviewContainer">
                        <div className="WriteReview">
                            <textarea className="textarea" name="text" wrap="soft" onChange={getData} value={review}/>
                            <br/>
                            <button className="AddReviewButton" onClick={saveReview}> Save Review </button>
                        </div>
                    </div>
                    <br/>
                    <div>
                        <h1>All reviews</h1>
                    </div>
                    {allReview.map ((review) => (
                        <Review API_id = {movie.id} user = {review.user}
                        reviewContent = {review.reviewContent}
                        stars = {review.stars}/>
                    ))}
                </div> 
            </div>
        </div>
    )
}

export default MoviePage