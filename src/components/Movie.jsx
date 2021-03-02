import React, { useState } from 'react'
// Note that we don't need to import App.css since this component is a child of App.js
// Assuming movie poster size has the ratio of 4050 pixels wide by 6000 pixels high
import database from '../firebase'
import {useEffect} from 'react'


//Movie component needs to take in a google object
function Movie(props) {
    const image_name = "Image of cover for " + props.title
    const [exist, setExistence] = useState(false)

    useEffect(() => {
        check_exist(props.title);
    });

    function redirectMovie(e) {
        e.preventDefault();
        console.log("The movie poster was clicked");
    }

    const saveToDb = () => {
        if (props.googleObj != null && !exist){
            database.ref(`/users/${props.googleObj.googleId}/movies`).push(
                {
                    title: props.title,
                    img: props.url
                }
            )
            setExistence(true);
        }
        else{
            console.log("object null");
        }
    }

    //props.id is null from homepage
    //might want to change this? kinda messy and might cause problems if there are two movies of the same name
    const deleteFromDb = (title) => {
        if (!props.id){
            database.ref().child(`users/${props.googleObj.googleId}/movies`).orderByChild('title').equalTo(title)
            .limitToFirst(1).once('child_added', snap => {
                if (title === snap.val().title ){
                    database.ref(`/users/${props.googleObj.googleId}/movies/${snap.key}`).remove()
                }
            })
        }
        else{
            database.ref(`/users/${props.googleObj.googleId}/movies/${props.id}`).remove()
        }
        setExistence(false);
    }

    const check_exist = (title) => {
        if (props.googleObj != null){
            database.ref().child(`users/${props.googleObj.googleId}/movies`).orderByChild('title').equalTo(title)
            .limitToFirst(1).once('child_added', snap => {
                if(title === snap.val().title){
                    setExistence(true);
                } 
                else{
                    setExistence(false);
                }  
            })
        }
    }

    /*
    function check_exist(movie_title){
        database.ref(`users/${props.googleObj.googleId}/movies`).orderByChild("title").equalTo(movie_title).once('value', function(snapshot){
            if (snapshot.exists()){
                return true;
            }
            else{
                return false;
            }
        })
    }*/

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
            exist ? 
                <button className="databaseButton" onClick={() => deleteFromDb(props.title)}>Delete from Favorite Movies</button>
                :
                <button className="databaseButton" onClick={() => saveToDb()}> Add to Favorite Movies</button>
            }
            </div>

        </div>
    )
}

export default Movie
