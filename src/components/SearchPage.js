import React, { useState } from 'react'
import Axios from "axios";
import { v4 as uuid4 } from uuid;


const SearchPage = () => {
    const performSearch() {
        const [query, setQuery] = useState("");
        const [movies, setMovies] = useState([]);
        const [alert, setAlert] = useState("");

        const APP_KEY = "78fcb8fa5df23ceee859f6258985efc4";
        const url = 'https://api.themoviedb.org/3/search/movie?api_key=${APP_KEY}&query=${query}';

        const getData = async () => {
            if (query !== "") {
                const result = await Axios.get(url);
                if (!result.data.more) {
                    return setAlert("No movie with such name");
                }
                console.log(result);
                setRecipes(result.data.hits);
                setQuery("");
                setAlert("");
            } else {
                setAlert("Please fill the form")
            }
        };

        const onChange = e => setQuery(e.target.value);

        const onSubmit = e => {
            e.preventDefault();
            getData();
        };

        return (
            <div className="performSearch">
                <h1>Movie Search</h1>
                <form onSubmit={onSubmit} className="search-form">
                    {alert !== "" && <Alert alert={alert} />}
                    <input
                        type="text"
                        name="query"
                        onChange={onChange}
                        value={query}
                        autoComplete="off"
                        placeholder="Search Movie"
                    />
                    <input type="submit" value="Search" />
                </form>
                <div className="movies">
                    {movies !== [] &&
                        movies.map(movie => <Movie key={uuidv4()} movie={movie} />)}
                </div>
            </div>
        );
    }
}

export default SearchPage;