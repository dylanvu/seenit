import React from 'react'
import MovieList from './MovieList'
import Axios from 'axios'
import { useState, useEffect } from 'react'

import {Link} from "react-router-dom";

let topDailymovies = []

const API_KEY = process.env.REACT_APP_THEMOVIESDB_API_KEY;
const SEARCH_API = 'https://api.themoviedb.org/3/trending/movie/day?api_key=' + API_KEY; // version 3

async function getDailymovies() {
    let result = await Axios.get(SEARCH_API);

    // Get only the top 10 movie
    for (var i = 0; i < 10; i++) {
        topDailymovies.push(result.data.results[i])
    }
    //console.log(top_movies);
}

const Homepage = (props) => {
    const [movies, setMovies] = useState([
        {
            id: 1,
            title: "La La Land",
            url: "https://upload.wikimedia.org/wikipedia/en/a/ab/La_La_Land_%28film%29.png",
        },
        {
            id: 2,
            title: "Your Name",
            url: "https://upload.wikimedia.org/wikipedia/en/0/0b/Your_Name_poster.png"
        },
        {
            id: 3,
            title: "Interstellar",
            url: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg"
        }
    ]) 

    useEffect(() => {
        getDailymovies()
    })

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
        <MovieList movieList={topDailymovies} listName={listName} googleObj = {props.googleObj} />
    </div>
    )
}

export default Homepage

{/* <h1 className="title">SeenIt</h1>
<p className="subheading">The Social Movie Network in React</p> */}