import React from 'react'
import MovieList from './MovieList'
import Axios from 'axios'
import { useState, useEffect } from 'react'


const API_KEY = process.env.REACT_APP_THEMOVIESDB_API_KEY;
const DAILY_SEARCH_API = 'https://api.themoviedb.org/3/trending/movie/day?api_key=' + API_KEY; // version 3
const WEEKLY_SEARCH_API = 'https://api.themoviedb.org/3/trending/all/week?api_key=' + API_KEY;

const Homepage = (props) => {

    const [topDaily, setTopDaily] = useState([]);
    const [topWeekly, setTopWeekly] = useState([])


    useEffect(() => {
        getDailymovies()
        getWeeklymovies()
    },[])

    async function getDailymovies() {
        let result = await Axios.get(DAILY_SEARCH_API);
        let temp = []
        // Get only the top 10 movie
        for (var i = 0; i < 14; i++) {
            if (result.data.results[i]) {
                temp.push(result.data.results[i])
            }
        }
        setTopDaily(temp)
    }

    async function getWeeklymovies() {
        let result = await Axios.get(WEEKLY_SEARCH_API);
        let temp = []
        // Get only the top 10 movie
        for (var i = 0; i < 14; i++) {
            if (result.data.results[i]) {
                temp.push(result.data.results[i])
            }
        }
        setTopWeekly(temp)
    }

    const dailylistName = "Daily Trending Movies"
    const weeklylistName = "Weekly Trending Movies"

    return (
    <div>
        <MovieList movieList={topDaily} listName={dailylistName} googleObj = {props.googleObj} setAPI_id = {props.setAPI_id}/>
        <br/>
        <MovieList movieList={topWeekly} listName={weeklylistName} googleObj = {props.googleObj} setAPI_id = {props.setAPI_id}/>
    </div>
    )
}

export default Homepage