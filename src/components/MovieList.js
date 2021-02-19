import PropTypes from 'prop-types'
import Movie from './Movie.jsx'
import {Link} from "react"


/* var interstellar = {
    url: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
    title: interstellar
} 

/*
                <Movie url = {interstellar.url} title = {interstellar.title}/>
*/

const MovieList = ({list,name}) => {
    return (
        <div className = "movieList-container">
            <div className = "movieListTitle-container">
                <div className = "movieListTitle">{name}</div>
            </div> 
            <div className = "movie-container">
                {list.map((movies) => (
                    <Movie key={movies.id} url = {movies.url} title = {movies.movie} />
                ))}
            </div>
        </div>
    )
}

export default MovieList