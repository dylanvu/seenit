import React from 'react'
import Axios from 'axios'
import { useState, useEffect } from 'react'
import database from '../firebase'
import Review from "./Review.jsx"
import poster_not_found from './poster_not_found.png'


const API_KEY = process.env.REACT_APP_THEMOVIESDB_API_KEY
const IMG_API = 'https://image.tmdb.org/t/p/w1280';

const MoviePage = (props) => {

    const [review, setReview] = useState("")
    const [allReview, setAllReview] = useState([])
    const [movie, setMovie] = useState([])
    const [director, setDirector] = useState("")
    const [writer, setWriter] = useState("")
    const [img_path, setimg_path] = useState();

    useEffect(() => {
        
        // Use this to set the current API_id irregardless of whether the user is coming from the homepage or refreshing
        let currentAPI = props.API_id

        // If the user is coming from a refresh, props.API_id will be null. So, change the current API_id to the stored one in session.
        if (props.API_id) {
            //console.log("Props API_ID is: " + props.API_id)
        } else if (sessionStorage.hasOwnProperty("API_id")) {
            console.log("Retrieving API_id from session")
            let savedAPI_id = sessionStorage.getItem("API_id");
            savedAPI_id = JSON.parse(savedAPI_id);
            currentAPI = savedAPI_id;
        }

        let JSON_id = JSON.stringify(currentAPI)
        sessionStorage.setItem("API_id", JSON_id)
        //console.log("currentAPI: " + currentAPI)

        const SEARCH_API = 'https://api.themoviedb.org/3/movie/' + currentAPI + "?api_key=" + API_KEY;
        const GETCREDITS_API = 'https://api.themoviedb.org/3/movie/' + currentAPI + '/credits?api_key=' + API_KEY;

        async function getMoviebyID() {
            let result = await Axios.get(SEARCH_API);
            if (result !== null) {
                console.log("Movie info successfully found")
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
        }
        getMoviebyID()

        async function getCredits() {
            let result = await Axios.get(GETCREDITS_API)
            //console.log(result.data)
            //console.log(result.data.crew)
            let crew = result.data.crew
            for (var i = 0; i < crew.length; i++){
                if (crew[i].job == "Director"){
                    //console.log(crew[i].name)
                    setDirector(crew[i])
                }
                if (crew[i].job == "Writer" || crew[i].job == "Screenplay"){
                    //onsole.log(crew[i].name)
                    setWriter(crew[i])
                }
            }
        }
        getCredits()

        //get all reviews for this movie
        database.ref(`movieReviews/${currentAPI}`).on("value", (snapshot) =>{
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

    }, []);


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
                    <h1>
                        <span className="MovieTitle">{movie.title}</span>
                        <div>
                            <span className="MovieRelease">({movie.release_date})</span>
                        </div>
                    </h1> 
                    <p className="overview">
                        {movie.overview}
                    </p>
                    <h1 className = "MovieCredits">Credits</h1>
                    <h2>Director:&nbsp;
                        <span>{director.name}</span>
                    </h2>
                    <h2>Screenplay/Writer:&nbsp;
                        <span>{writer.name}</span>
                    </h2>
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