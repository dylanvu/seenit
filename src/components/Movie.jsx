import React, { useState } from 'react';
import { Link, Switch, Route } from "react-router-dom";
// Note that we don't need to import App.css since this component is a child of App.js
// Assuming movie poster size has the ratio of 4050 pixels wide by 6000 pixels high
import MoviePage from './MoviePage';
import database from '../firebase';
import {useEffect} from 'react';

const IMG_API = 'https://image.tmdb.org/t/p/w1280';


//Movie component needs to take in a google object
function Movie(props) {
    const image_name = "Image of cover for " + props.title
    const [exist, setExistence] = useState(false)

    console.log(props.key)

    useEffect(() => {
        check_exist(props.API_id);
    });

    function redirectMovie(e) {
        e.preventDefault();
        console.log("The movie poster was clicked");
    }

    const saveToDb = () => {
        if (props.googleObj != null && !exist){
            database.ref(`/users/${props.googleObj.googleId}/movies`).push(
                {
                    API_id: props.API_id,
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

    const deleteFromDb = (API_id) => {
        database.ref().child(`users/${props.googleObj.googleId}/movies`).orderByChild('API_id').equalTo(API_id)
        .limitToFirst(1).once('child_added', snap => {
            if (API_id === snap.val().API_id ){
                database.ref(`/users/${props.googleObj.googleId}/movies/${snap.key}`).remove()
            }
        })

        setExistence(false);
    }


    const check_exist = (API_id) => {
        if (props.googleObj != null){
            database.ref().child(`users/${props.googleObj.googleId}/movies`).orderByChild('API_id').equalTo(API_id)
            .limitToFirst(1).once('child_added', snap => {
                if(API_id === snap.val().API_id){
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
                <img src={IMG_API + props.url} alt={image_name} className="moviePoster"/>
                <Link to={{
                    pathname: '/Movie',
                    state: {
                        API_id: props.API_id
                    }
                }}>
                    <div className="overlay">
                        <div className="movieText">{props.title}</div>
                    </div>
                </Link>
                <div>
                {
                exist ? 
                    <button className="databaseButton" onClick={() => deleteFromDb(props.API_id)}>Delete from Favorite Movies</button>
                    :
                    <button className="databaseButton" onClick={() => saveToDb()}> Add to Favorite Movies</button>
                }
                </div>
            {/* <Switch>
                <Route exact path="/Movie">
                    <MoviePage googleObj = {props.googleObj} API_id = {props.API_id}/>
                </Route>
            </Switch> */}
        </div>
    )
}

export default Movie
