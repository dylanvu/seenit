import React from 'react'
import MovieList from './MovieList'
import Axios from 'axios'
import { useState, useEffect } from 'react'

import {Link} from "react-router-dom";


const API_KEY = process.env.REACT_APP_THEMOVIESDB_API_KEY;
const SEARCH_API = 'https://api.themoviedb.org/3/trending/movie/day?api_key=' + API_KEY; // version 3



const Homepage = (props) => {

    const [topDaily, setTopDaily] = useState([]);


    useEffect(() => {
        getDailymovies()
    },[])

    async function getDailymovies() {
        let result = await Axios.get(SEARCH_API);
        let temp = []
        // Get only the top 10 movie
        for (var i = 0; i < 10; i++) {
            temp.push(result.data.results[i])
        }
    
        setTopDaily(temp)
    }

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
        <MovieList movieList={topDaily} listName="Top User-Rated Movies" googleObj = {props.googleObj} />
    </div>
    )
}

export default Homepage

{/* <h1 className="title">SeenIt</h1>
<p className="subheading">The Social Movie Network in React</p> */}