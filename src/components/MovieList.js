import Movie from './Movie.jsx'
// import { useEffect } from 'react'


const MovieList = (props) => {
    //console.log(props.movieList[0])

    // console.log("MovieList")
    // console.log(props.movieList)


    // useEffect (() => {
    //     console.log(props.movieList.map((movie) => {
    //         console.log(movie)
    //     }))
    // }, [])


    return (
        <div className = "movieList-container">
            <div className = "movieListTitle-container">
                <div className = "movieListTitle">{props.listName}</div>
            </div> 
            <br/>
            <div className = "movie-container">
                {props.movieList.map((movie) => (
                    <Movie API_id={movie.id} url={movie.poster_path} title={movie.title} googleObj={props.googleObj} setAPI_id={props.setAPI_id}/>
                ))}
            </div>
        </div>
    )
}

export default MovieList