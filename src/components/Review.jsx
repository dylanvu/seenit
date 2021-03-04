import React from 'react'
import database from '../firebase'


const Review = (props) => {

    console.log(props.db_key)

    function deleteFromDb(db_key){
        database.ref(`/users/${props.googleObj.googleId}/movieReviews/${db_key}`).remove()
        database.ref(`/movieReviews/${props.API_id}/${db_key}`).remove()
    }


    return (
        <div id="ReviewContainerShadow">
            <div className="ReviewContainer">
                <div className="Review">
                    <h2>{props.db_key ? props.movieTitle : props.user}</h2>
                    <q className="ReviewContent">{props.reviewContent}</q>
                    <p className="stars">Stars: {props.stars}</p>
                    {props.db_key ? <button className="databaseButton" onClick={() => deleteFromDb(props.db_key)}> Delete review </button> : null}
                </div>
            </div>
        </div>

    )
}

export default Review