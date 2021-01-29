import React from 'react'

// let Review = {
//     movieTitle: "Interstellar",
//     reviewContent: "",
//     stars: "5"
// }

const Review = (props) => {
    return (
        <div>
            <h2>{props.movieTitle}</h2>
            <p>{props.reviewContent}</p>
            <p>Stars: {props.stars}</p>
        </div>
    )
}

export default Review