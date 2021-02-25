import React from 'react';

const img_url = 'https://image.tmdb.org/t/p/w1280';

const SearchMovie = ({title, poster_path, overview, vote_average}) => {
    <div className="movie">
        <img src = {img_url + poster_path} alt={title} />
        <div className = "movie-info">
            <h3> {title} </h3>
            <span>{vote_average}</span>
        </div>
    </div>
};

export default SearchMovie;
