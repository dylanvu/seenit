import React, { useState } from 'react'
// Note that we don't need to import App.css since this component is a child of App.js
// Assuming movie poster size has the ratio of 4050 pixels wide by 6000 pixels high

function Movie(props) {
    const image_name = "Image of cover for " + props.title

    function redirectMovie(e) {
        e.preventDefault();
        console.log("The movie poster was clicked");
    }

    return(
        <div class="movie">
            <img src={props.url} alt={image_name} class="moviePoster"/>
            <a href={props.url}>
                <div class="overlay">
                    <div class="movieText">{props.title}</div>
                </div>
            </a>
        </div>
    )
}

export default Movie
