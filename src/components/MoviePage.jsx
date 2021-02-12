import React from 'react'

const MoviePage = () => {
    return (
        <div className="MoviePageFlex">
            <div className="MovieImage">
                <img src="https://images-na.ssl-images-amazon.com/images/I/61pVLV%2Bz11L._AC_SL1162_.jpg" alt="Movie Poster" className="MoviePagePoster" />
            </div>
            <div className="MovieContent">
                <h1>La La Land</h1>
                <p>
                    While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.
                </p>
                <h2>Director:&nbsp;
                    <span>Joe Director</span>
                </h2>
                <h2>Writer:&nbsp;
                    <span>Joe Writer</span>
                </h2>
                <h2>Starring:&nbsp;
                    <span>Ryan Gosling</span>
                </h2>
            </div>
        </div>
    )
}

export default MoviePage