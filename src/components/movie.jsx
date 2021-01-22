import React, { useState } from 'react'
// Note that we don't need to import App.css since this component is a child of App.js

function Movie(props) {

    return(
        <div>
            <img src={props.url} class="movie"/>
        </div>
    )
}

export default Movie