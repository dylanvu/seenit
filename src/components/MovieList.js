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

const MovieList = (props) => {
    return (
        <div className = "movieList-container">
            <div className = "movieListTitle-container">
                <div className = "movieListTitle">{props.listName}</div>
            </div> 
            <div className = "movie-container">
                <Movie url = {props.moviesList.url} title = {props.moviesList.title}/>
                <Movie url = {props.moviesList.url } title = {props.moviesList.title}/>
                <Movie url = {props.moviesList.url} title = {props.moviesList.title}/>
                <Movie url = {props.moviesList.url} title = {props.moviesList.title}/>
                <Movie url = {props.moviesList.url} title = {props.moviesList.title}/>
            </div>
        </div>
    )
}

MovieList.defaultProps = {
    listName: 'List Name',
}

MovieList.propTypes = {
    listName: PropTypes.string,
}



export default MovieList
