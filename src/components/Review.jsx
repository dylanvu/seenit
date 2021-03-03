import React from 'react'
import database from '../firebase'


const Review = (props) => {

    const deleteFromDb = () => {
        database.ref(`/users/${props.googleObj.googleId}/movieReviews/${props.id}`).remove()
        database.ref(`/movieReviews/${props.movieTitle}/${props.id}`).remove()
    }

    return (
        <div id="ReviewContainerShadow">
            <div className="ReviewContainer">
                <div className="Review">
                    <h2>{props.movieTitle ? props.movieTitle : props.user}</h2>
                    <q className="ReviewContent">{props.reviewContent}</q>
                    <p className="stars">Stars: {props.stars}</p>
                    {props.movieTitle ? <button className="databaseButton" onClick={deleteFromDb}>Delete review</button> : null}
                </div>
            </div>
        </div>

    )
}

export default Review