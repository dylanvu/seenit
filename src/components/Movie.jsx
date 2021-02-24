import React, { useState } from 'react'
// Note that we don't need to import App.css since this component is a child of App.js
// Assuming movie poster size has the ratio of 4050 pixels wide by 6000 pixels high
import database from '../firebase'


//Movie component needs to take in a google object
function Movie(props) {
    const image_name = "Image of cover for " + props.title

    function redirectMovie(e) {
        e.preventDefault();
        console.log("The movie poster was clicked");
    }

    //need to make sure props take in a google object
    const saveToDb = () => {
        if (props.googleObj != null){
            database.ref(`/users/${props.googleObj.googleId}/movies`).push(
                {
                    title: props.title,
                    img: props.url
                }
            )
        }
        else{
            console.log("object null");
        }
    }

    const deleteFromDb = () => {
        database.ref(`/users/${props.googleObj.googleId}/movies/${props.id}`).remove()
    }

    return(
        <div className="movie">
            <img src={props.url} alt={image_name} className="moviePoster"/>
            <a href={props.url}>
                <div className="overlay">
                    <div className="movieText">{props.title}</div>
                </div>
            </a>
            <div>
            {
                props.id ? 
                <button onClick={() => deleteFromDb()}>Delete from Favorite Movies</button>
                :
                <button onClick={() => saveToDb()}>Add to Favorite Movies</button>
            }
            </div>

        </div>
    )
}

export default Movie
