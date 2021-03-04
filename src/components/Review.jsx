import React from 'react'
import database from '../firebase'


const Review = (props) => {

    function deleteFromDb(db_key,db_key_2){
        database.ref(`/users/${props.googleObj.googleId}/movieReviews/${db_key}`).remove()
        database.ref(`/movieReviews/${props.API_id}/${db_key_2}`).remove()
    }


    return (
        <div id="ReviewContainerShadow">
            <div className="ReviewContainer">
                <div className="Review">
                    <h2>{props.db_key ? props.movieTitle : props.user}</h2>
                    <q className="ReviewContent">{props.reviewContent}</q>
                    <br/>
                    <br/>
                    <div>
                        {props.db_key ? <button className="reviewButton" onClick={() => deleteFromDb(props.db_key, props.db_key_2)}> Delete review </button> : null}
                    </div>
                    <br/>
                </div>
            </div>
        </div>

    )
}

export default Review