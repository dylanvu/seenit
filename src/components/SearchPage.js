import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { v4 as uuid4 } from 'uuid'
import SearchMovie from './SearchMovie'
import Alert from './Alert'

const SearchPage = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [alert, setAlert] = useState('');

    const API_KEY = "78fcb8fa5df23ceee859f6258985efc4";
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}'; // version 3

    const getData = async () => {
        if (query !== "") {
            const result = await Axios.get(url); // fetches the data
            if (result.data.results == []) { // alert if results array is empty
                return setAlert("No movie with such name");
            }
            console.log(result);
            setMovies(result.data.results); // get the movies data using results array
            setQuery("");
            setAlert("");
        } else {
            setAlert("Please fill out the form")
        }
    };

    // Set the query so that if updates with each search
    const onChange = e => setQuery(e.target.value);

    const onSubmit = e => {
        e.preventDefault();
        getData();
    };

    return (
        <div className="Search Page">
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
                {movies != [] && // check if movies isn't empty
                    movies.map(movie => <SearchMovie key={movie.id} {...movie} />)}
            </div>
        </div>
    );
}

export default SearchPage;