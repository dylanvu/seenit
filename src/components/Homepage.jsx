import React from 'react'
import MovieList from './MovieList'
import Axios from 'axios'
import { useState, useEffect } from 'react'


const API_KEY = process.env.REACT_APP_THEMOVIESDB_API_KEY;
const DAILY_SEARCH_API = 'https://api.themoviedb.org/3/trending/movie/day?api_key=' + API_KEY; // version 3
const WEEKLY_SEARCH_API = 'https://api.themoviedb.org/3/trending/movie/week?api_key=' + API_KEY;
const NOW_PLAYING_SEARCH_API = 'https://api.themoviedb.org/3/movie/now_playing?api_key=' + API_KEY + '&language=en-US&page=1';
const TOP_RATED_API = 'https://api.themoviedb.org/3/movie/top_rated?api_key=' + API_KEY + '&language=en-US&page=1&region=US';

const Homepage = (props) => {

    const [topDaily, setTopDaily] = useState([]);
    const [topWeekly, setTopWeekly] = useState([]);
    const [nowPlaying, setPlaying] = useState([]);
    const [topRated, setToprated] = useState([]);


    useEffect(() => {
        getDailymovies()
        getWeeklymovies()
        getPlayingmovies()
        getTopRatedmovies()
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

    async function getPlayingmovies() {
        let result = await Axios.get(NOW_PLAYING_SEARCH_API);
        let temp = []
        // Get only the top 10 movie
        for (var i = 0; i < 14; i++) {
            if (result.data.results[i]) {
                temp.push(result.data.results[i])
            }
        }
        setPlaying(temp)
    }

    async function getTopRatedmovies() {
        let result = await Axios.get(TOP_RATED_API);
        let temp = []
        // Get only the top 10 movie
        for (var i = 0; i < 14; i++) {
            if (result.data.results[i]) {
                temp.push(result.data.results[i])
            }
        }
        setToprated(temp)
    }

    return (
    <div>
        <MovieList movieList={nowPlaying} listName={"Now Playing in the US"} googleObj = {props.googleObj} setAPI_id = {props.setAPI_id}/>
        <br/>
        <MovieList movieList={topRated} listName={"Top Rated Movies"} googleObj = {props.googleObj} setAPI_id = {props.setAPI_id}/>
        <br/>
        <MovieList movieList={topDaily} listName={"Trending Today"} googleObj = {props.googleObj} setAPI_id = {props.setAPI_id}/>
        <br/>
        <MovieList movieList={topWeekly} listName={"Trending This Week"} googleObj = {props.googleObj} setAPI_id = {props.setAPI_id}/>
        <br/>
    </div>
    )
}

export default Homepage