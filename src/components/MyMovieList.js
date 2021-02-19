import PropTypes from 'prop-types'
import Movie from './Movie.jsx'
import {Link} from "react"
import { useState, useEffect } from 'react';

import database from '../firebase'


/* var interstellar = {
    url: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
    title: interstellar
} 

/*
                <Movie url = {interstellar.url} title = {interstellar.title}/>
*/

const MyMovieList = (props) => {

    const [movies, setMovies] = useState([]);

    useEffect(() => 
        database.ref(`users/${props.googleObj.googleId}/movies`).on("value", (snapshot) =>{
            let myMovies = []
            if (snapshot != null){
                snapshot.forEach(data => {
                    let movie = {
                        id: data.key,
                        title: data.val().title,
                        url: data.val().url
                    }
                    myMovies.push(movie)
                })
            }
            setMovies(movies.concat(myMovies))
        })
    ,[])


    return (
        <div className = "movieList-container">
            <div className = "movieListTitle-container">
                <div className = "movieListTitle">{props.name}</div>
            </div> 
            <div className = "movie-container">
                {movies.map((movie) => (
                    <Movie id ={movie.id} googleObj={props.googleObj} url = {movie.url} title = {movie.title} />
                ))}
            </div>
        </div>
    )
}

export default MyMovieList