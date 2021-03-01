import React from 'react'
import {useState} from 'react'
import database from '../firebase'

// Props should likely have properties:
// URL (for image poster)
// Name (For movie title)
// Summary? Director? Writer? Actors? Not sure how this will work. Likely depends on how the data we obtain is formatted

const MoviePage = (props) => {

    const[review, setReview] = useState("")

    function getData(val){
        setReview(val.target.value)
    }

    function saveReview(){
        if (props.googleObj != null){
            database.ref(`/users/${props.googleObj.googleId}/movieReviews`).push(
                {
                    movie: "La la Land",
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
                    <h1>Write a review</h1>
                    <input type="text" onChange={getData} value={review}/>
                    <button onClick={saveReview}> Save Review </button>
                </div>
            </div>
        </div>
    )
}

export default MoviePage