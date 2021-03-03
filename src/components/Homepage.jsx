import React from 'react'
import MovieList from './MovieList'
import Axios from 'axios'
import { useState, useEffect } from 'react'


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
        for (var i = 0; i < 14; i++) {
            if (result.data.results[i]) {
                temp.push(result.data.results[i])
            }
        }
    
        setTopDaily(temp)
    }

    const listName = "Daily Trending Movies"

    return (
    <div>
        <MovieList movieList={topDaily} listName={listName} googleObj = {props.googleObj} setAPI_id = {props.setAPI_id}/>
    </div>
    )
}

export default Homepage

{/* <h1 className="title">SeenIt</h1>
<p className="subheading">The Social Movie Network in React</p> */}