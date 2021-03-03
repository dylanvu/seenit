import PropTypes from 'prop-types'
import Movie from './Movie.jsx'
import {Link} from "react"


const MovieList = (props) => {
    console.log(props.movieList[0])
    return (
        <div className = "movieList-container">
            <div className = "movieListTitle-container">
                <div className = "movieListTitle">{props.listName}</div>
            </div> 
            <div className = "movie-container">
                {props.movieList.map((movie) => (
                    <Movie API_id={movie.id} url={movie.poster_path} title={movie.title} googleObj = {props.googleObj}/>
                ))}
            </div>
        </div>
    )
}

export default MovieList