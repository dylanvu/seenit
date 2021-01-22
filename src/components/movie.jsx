import React, { useState } from 'react'
// Note that we don't need to import App.css since this component is a child of App.js

function Movie(props) {
    const image_name = "Image of cover for " + props.title
    return(
        <div class="movie">
            <img src={props.url} alt={image_name}/>
            <div class="overlay">
                <div class="movie_text">{props.title}</div>
            </div>
        </div>
    )
}

export default Movie