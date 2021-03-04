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
    const [credits, setCredits] = useState([])
    const [director, setDirector] = useState("")
    const [writer, setWriter] = useState("")
    const [img_path, setimg_path] = useState();

    const SEARCH_API = 'https://api.themoviedb.org/3/movie/' + props.API_id + "?api_key=" + API_KEY;
    const GETCREDITS_API = 'https://api.themoviedb.org/3/movie/' + props.API_id + '/credits?api_key=' + API_KEY;

    // Future TODO: Consoldate into one mega useEffect

    useEffect(() => {
        // Check to see if there is anything in the sessionStorage (both movie and image path) and retrieve it if so
        if (sessionStorage.hasOwnProperty("MoviePage")) {
            // console.log("Get last movie")
            // console.log(sessionStorage.getItem("MoviePage"))
            let savedMovie = sessionStorage.getItem("MoviePage");
            // console.log(savedMovie)
            savedMovie = JSON.parse(savedMovie);
            console.log(savedMovie);
            setMovie(savedMovie);
        }
        if (sessionStorage.hasOwnProperty("img_path")) {
            let savedimg_path = sessionStorage.getItem("img_path");
            savedimg_path = JSON.parse(savedimg_path);
            setimg_path(savedimg_path);
        }
    }, []);

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
            console.log("Async")
            let result = null
            try {
                result = await Axios.get(SEARCH_API);
            } catch(e) {
                console.error(e);
            }
            //console.log(result)
            //console.log(result.data);
            if (result !== null) {
                console.log("Movie set")
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
        getMoviebyID(props.API_id)

        async function getCredits() {
            let result = await Axios.get(GETCREDITS_API)
            console.log(result.data)
            setCredits(result.data)
            console.log(result.data.crew)
            let crew = result.data.crew
            for (var i = 0; i < crew.length; i++){
                if (crew[i].job == "Director"){
                    console.log(crew[i].name)
                    setDirector(crew[i])
                }
                if (crew[i].job == "Writer"){
                    console.log(crew[i].name)
                    setWriter(crew[i])
                }
            }
        }
        getCredits(props.API_id)

    },[])

    // Save current page data into sessionStorage so that when window refreshes on accident, data is preserved
    useEffect(() => {
        let JSONmovie = JSON.stringify(movie)
        sessionStorage.setItem("MoviePage", JSONmovie)
    }, [movie])

    useEffect(() => {
        let JSONimg_path = JSON.stringify(img_path)
        sessionStorage.setItem("img_path", JSONimg_path)
    }, [img_path])

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
                    <h1 className = "MovieCredits">Credits</h1>
                    <h2>Director:&nbsp;
                        <span>{director.name}</span>
                    </h2>
                    <h2>Writer:&nbsp;
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