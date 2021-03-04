import React from 'react'
import Axios from 'axios'
import { useState, useEffect } from 'react'
import database from '../firebase'
import Review from "./Review.jsx"
import poster_not_found from './poster_not_found.png'


const API_KEY = process.env.REACT_APP_THEMOVIESDB_API_KEY
const IMG_API = 'https://image.tmdb.org/t/p/w1280';

const MoviePage = (props) => {

    const[review, setReview] = useState("")
    const[allReview, setAllReview] = useState([])
    const [movie, setMovie] = useState([])
    const [img_path, setimg_path] = useState();

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
            setAllReview(reviews)
        })
    ,[]) 

    useEffect(() => {
        async function getMoviebyID() {
            //console.log(SEARCH_API)
            let result = await Axios.get(SEARCH_API);
            //console.log(result.data);
            setMovie(result.data)
            //console.log(result.data.poster_path)
            if (result.data.poster_path == null) {
                setimg_path(poster_not_found)
                //console.log("Not found")
            } else {
                setimg_path(IMG_API + result.data.poster_path)
                // console.log(img_path)
            }
        }
        getMoviebyID(props.API_id)
        // console.log(allReview)
        // console.log(allReview.length == 0)

        // Check to see if the poster exists, otherwise use a default placeholder image
    },[])

    //get text from the text box
    function getData(val){
        setReview(val.target.value)
    }

    //save new review to the data base 
    function saveReview(){
        if (props.googleObj != null){
            var newPostRef = database.ref(`/movieReviews/${props.API_id}`).push(
                {
                    API_id: props.API_id,
                    user: props.googleObj,
                    review: review
                }
            )
            var push_key = newPostRef.key;
            database.ref(`/users/${props.googleObj.googleId}/movieReviews`).push(
                {
                    db_key_2: push_key,
                    API_id: props.API_id,
                    title: movie.title,
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
        <div>
            <br/>
            <div className="MoviePageFlex">
                <div className="MovieImage">
                    <img src={img_path} alt={"Movie Poster of " + movie.title} className="MoviePagePoster" />
                </div>
                <div className="MovieContent">
                    <h1 className="MovieTitle">{movie.title}</h1>
                    <p className="overview">
                        {movie.overview}
                    </p>
                    <br/>
                    <div>
                        <div>
                            {(allReview.length === 0) ? <h1>Write the First Review</h1> : <h1>Write a Review</h1>}
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
                            {(allReview.length === 0) ? <h1>No Reviews Found</h1> : <h1>All Reviews</h1>}
                        </div>
                        {allReview.map ((review) => (
                            <Review API_id = {movie.id} user = {review.user}
                            reviewContent = {review.reviewContent}
                            stars = {review.stars}/>
                        ))}
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default MoviePage