import React from 'react'

// Props should likely have properties:
// URL (for image poster)
// Name (For movie title)
// Summary? Director? Writer? Actors? Not sure how this will work. Likely depends on how the data we obtain is formatted.


const MoviePage = () => {
    // I've set up a temporary "props" example
    let props = {
        title: "La La Land",
        summary: "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.",
        director: "Director",
        writer: "Joe Writer",
        actors: "Ryan Gosling"
    }
    
    return (
        <div className="MoviePageFlex">
            <div className="MovieImage">
                <img src="https://images-na.ssl-images-amazon.com/images/I/61pVLV%2Bz11L._AC_SL1162_.jpg" alt="Movie Poster" className="MoviePagePoster" />
            </div>
            <div className="MovieContent">
                <h1>{props.title}</h1>
                <p>
                    {props.summary}
                </p>
                <h2>Director:&nbsp;
                    <span>{props.director}</span>
                </h2>
                <h2>Writer:&nbsp;
                    <span>{props.writer}</span>
                </h2>
                <h2>Starring:&nbsp;
                    <span>{props.actors}</span>
                </h2>
            </div>
        </div>
    )
}

export default MoviePage