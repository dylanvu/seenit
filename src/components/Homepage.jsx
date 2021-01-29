import React from 'react'
import MovieList from './MovieList'
import Button from "react-bootstrap/Button";
import { useState } from 'react'

import {Link} from "react-router-dom";

let topMovies = {
    listName: "Top Rated Movies",
    moviesList: {
        url: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
        title: "Interstellar"
    }
}



const listName = "Top Rated Movies"

const Homepage = () => {


    const[movies, setMovies] = useState([
        {
            id: 1,
            movie: "La La Land",
            url: "https://upload.wikimedia.org/wikipedia/en/a/ab/La_La_Land_%28film%29.png",
        },
        {
            id: 2,
            movie: "Your Name",
            url: "https://upload.wikimedia.org/wikipedia/en/0/0b/Your_Name_poster.png"
        }
    ])

    const listName = "Top Rated Movies"


    return (
    <div className="App">
        <Button className="Button">
            <Link to="/Login">Log in here</Link>
        </Button>
        <MovieList list = {movies} name = {listName} />
    </div>
    )
}

export default Homepage