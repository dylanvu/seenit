import React from 'react'
import database from '../firebase'


const Review = (props) => {

    function deleteFromDb(){
        database.ref(`/users/${props.googleObj.googleId}/movieReviews/${props.key}`).remove()
        database.ref(`/movieReviews/${props.API_id}/${props.key}`).remove()
    }


    return (
        <div id="ReviewContainerShadow">
            <div className="ReviewContainer">
                <div className="Review">
                    <h2>{props.key ? props.movieTitle : props.user}</h2>
                    <q className="ReviewContent">{props.reviewContent}</q>
                    <p className="stars">Stars: {props.stars}</p>
                    {props.key ? <button className="databaseButton" onClick={deleteFromDb()}>Delete review</button> : null}
                </div>
            </div>
        </div>

    )
}

export default Review