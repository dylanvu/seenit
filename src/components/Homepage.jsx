import React from 'react'
import MovieList from './MovieList'
import Button from "react-bootstrap/Button";

import {Link} from "react-router-dom";

let topMovies = {
    listName: "Top Rated Movies",
    moviesList: {
        url: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
        title: "Interstellar"
    }
}

const Homepage = () => {
    return (
    <div className="App">
        <Button className="Button">
            <Link to="/Login">Log in here</Link>
        </Button>
        <MovieList listName = {topMovies.listName} moviesList={topMovies.moviesList}/>
    </div>
    )
}

export default Homepage