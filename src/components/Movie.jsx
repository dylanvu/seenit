import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
// Assuming movie poster size has the ratio of 4050 pixels wide by 6000 pixels high
import database from '../firebase';
import poster_not_found from './poster_not_found.png'

const IMG_API = 'https://image.tmdb.org/t/p/w1280';

//Movie component needs to take in a google object
function Movie(props) {
    const image_name = "Image of cover for " + props.title;
    const [exist, setExistence] = useState(false);
    const [img_path, setimg_path] = useState();

    //console.log(props.key)

    useEffect(() => {
        check_exist(props.API_id);
        let img_src = IMG_API + props.url;
        if (props.url == null) {
            // console.log("Poster was not found")
            setimg_path(poster_not_found)
        } else {
            // console.log(props.title)
            // console.log(img_src)
            setimg_path(img_src)
        }
    }, []);

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

    function setID() {
        props.setAPI_id(props.API_id)
    }

    return(
        <div>
            <div className="movie">
                <img src={img_path} alt={image_name} className="moviePoster"/>
                <Link to='/Movie' onClick={setID}>
                    <div className="overlay">
                        <div className="movieText">{props.title}</div>
                    </div>
                </Link>
            </div>
            <div>
                {
                exist ? 
                    <button className="databaseButton" onClick={() => deleteFromDb(props.API_id)}>Delete from Favorite Movies</button>
                    :
                    <button className="databaseButton" onClick={() => saveToDb()}> Add to Favorite Movies</button>
                }
            </div>
            <br/>
        </div>
    )
}

export default Movie
