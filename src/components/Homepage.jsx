import React from 'react'
import MovieList from './MovieList'
import Button from "react-bootstrap/Button";
import Logo from './Logo.js';
import { useState } from 'react'

import {Link} from "react-router-dom";

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
        },
        {
            id: 3,
            movie: "Interstellar",
            url: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg"
        }
    ])

    const listName = "Top User-Rated Movies"


    return (
    <div>
        {/* <Logo /> */}
        <p style={{textAlign: "center"}}>
            <Link to = "/User">Go to User Page Test</Link>
        </p>
        {/* <Button className="Button">
            <Link to="/Login">Log in here</Link>
        </Button> */}
        <MovieList list = {movies} name = {listName} />
    </div>
    )
}

export default Homepage

{/* <h1 className="title">SeenIt</h1>
<p className="subheading">The Social Movie Network in React</p> */}