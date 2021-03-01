import React from 'react'
import MovieList from './MovieList'
import Button from "react-bootstrap/Button";
import Logo from './Logo.js';
import { useState } from 'react'

import {Link} from "react-router-dom";

const Homepage = (props) => {

    
    const[movies, setMovies] = useState([
        {
            key: 1,
            title: "La La Land",
            url: "https://upload.wikimedia.org/wikipedia/en/a/ab/La_La_Land_%28film%29.png",
        },
        {
            key: 2,
            title: "Your Name",
            url: "https://upload.wikimedia.org/wikipedia/en/0/0b/Your_Name_poster.png"
        },
        {
            key: 3,
            title: "Interstellar",
            url: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg"
        }
    ]) 

    const listName = "Top User-Rated Movies"


    return (
    <div>
        {/* <Logo /> */}
        {/* <p style={{textAlign: "center"}}>
            <Link to = "/User">Go to User Page Test</Link>
        </p> */}
        {/* <Button className="Button">
            <Link to="/Login">Log in here</Link>
        </Button> */}
        <MovieList movieList={movies} listName={listName} googleObj = {props.googleObj} />
    </div>
    )
}

export default Homepage

{/* <h1 className="title">SeenIt</h1>
<p className="subheading">The Social Movie Network in React</p> */}