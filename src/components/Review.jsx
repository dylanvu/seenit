import React from 'react'

// let Review = {
//     movieTitle: "Interstellar",
//     reviewContent: "",
//     stars: "5"
// }

const Review = (props) => {
    return (
        <div id="ReviewContainerShadow">
            <div className="ReviewContainer">
                <div className="Review">
                    <h2>{props.movieTitle ? props.movieTitle : props.user}</h2>
                    <q className="ReviewContent">{props.reviewContent}</q>
                    <p className="stars">Stars: {props.stars}</p>
                </div>
            </div>
        </div>

    )
}

export default Review