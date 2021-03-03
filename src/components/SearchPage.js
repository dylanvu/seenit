import React, { useState } from 'react'
import Axios from 'axios'
import Alert from './Alert'
import MovieList from './MovieList'

const SearchPage = (props) => {
    let [query, setQuery] = useState('');
    // let [movies, setMovies] = useState([{
    //     id: 0,
    //     title: "Interstellar",
    //     poster_path: "/xJHokMbljvjADYdit5fK5VQsXEG.jpg",
    //     overview: "Good movie",
    //     vote_average: 8.3
    // }]);
    let [movies, setMovies] = useState([]);
    let [alert, setAlert] = useState('');
    let [searchStatus, setSearchstatus] = useState(false)
    let listName = "Search Results"
    const API_KEY = process.env.REACT_APP_THEMOVIESDB_API_KEY;
    const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_KEY + '&query=' + query; // version 3
    //console.log(SEARCH_API)

    const getData = async () => {
        if (query !== "") {
            console.log("The query submitted is: "+ query)
            const result = await Axios.get(SEARCH_API); // fetches the data
            if (result.data.results === []) { // alert if results array is empty
                setAlert("No movie with such name");
                console.log("No movie found");
                return null;
            }
            //console.log(result.data)
            console.log(result.data.results); //should match line 31
            console.log(result.data.results[0]);
            //let search_result = result.data.results
            //setMovies(search_result); // get the movies data using results array
            let top10 = [];
            for (var i = 0; i < 10; i++){
                top10.push(result.data.results[i]);
            }
            setMovies(top10); // get the movies data using results array
            setSearchstatus(true)
            console.log(movies)
            setQuery("");
            setAlert("");
        } else {
            setAlert("Please fill out the form")
        }
        return null;
    };

    // Set the query so that if updates with each search
    const onChange = e => {
        //console.log(e.target.value)
        setQuery(e.target.value);
        //console.log(query);
    }

    const onSubmit = e => {
        e.preventDefault();
        if (query) {
            getData();
            setQuery('')
        }
    };

    return (
        <div className="SearchPage">
            <h1>Search for Movies</h1>
            <form onSubmit={onSubmit} className="search-form">
                {alert !== "" && <Alert alert={alert} />}
                {/* search bar */}
                <input
                    type="text"
                    name="query"
                    onChange={onChange}
                    value={query}
                    autoComplete="off"
                    placeholder="Search Movies"
                />
                {/* submit button */}
                <input type="submit" value="Search" />
            </form>
            {/* list of movies displayed */}
            <div className="search-results-container">
                {/* {searchStatus ? <MovieList movieList={movies} listName={listName} googleObj = {props.googleObj}/> : <p>Please search for a movie above!</p>} */}
                {searchStatus ? <MovieList googleObj={props.googleObj} listName="Search Results" movieList={movies} setAPI_id = {props.setAPI_id}/> : <p>Please search for a movie above!</p>}
            </div>
        </div>
    );
}

export default SearchPage;

// Poster path looks like: https://image.tmdb.org/t/p/w500 + poster_path. For example: https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg