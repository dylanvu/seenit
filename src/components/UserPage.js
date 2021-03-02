import MovieList from './MovieList'
import AboutMe from './AboutMe.js'
import ReviewList from './ReviewList'
import UserPic from './UserPic.js'
import { useState } from 'react'
import Movie from './Movie.jsx'
import {useEffect} from 'react'
import database from '../firebase'


const UserPage = (props) => {

    //create list of movie from user's data base
    const [movies, setMovies] = useState([]);

    useEffect(() => 
        database.ref(`users/${props.googleObj.googleId}/movies`).on("value", (snapshot) =>{
            let myMovies = []
            if (snapshot != null){
                snapshot.forEach(data => {
                    let movie = {
                        id: data.key,
                        title: data.val().title,
                        url: data.val().img
                    }
                    myMovies.push(movie)
                })
            }
            setMovies(movies.concat(myMovies))
        })
    ,[])

    /*
    const[movies, setMovies] = useState([
        {
            id: 1,
            movie: "Arrival",
            url: "https://m.media-amazon.com/images/M/MV5BMTExMzU0ODcxNDheQTJeQWpwZ15BbWU4MDE1OTI4MzAy._V1_.jpg",
        },
        {
            id: 2,
            movie: "The Martian",
            url: "https://images-na.ssl-images-amazon.com/images/I/A1%2BFw58qbDL._AC_SL1500_.jpg"
        },
        {
            id: 3,
            movie: "Interstellar",
            url: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg"
        }
    ]) */


    return(
        <div class="UserPageFlex">
            <div className="user">
                {/* <UserPic /> Disabled this component for now since it is broken*/}
                {/* <img src ="https://i.ytimg.com/vi/4y_lc8m4vSc/hqdefault.jpg" /> */}
                <img className="GooglePic" src = {props.googleObj.imageUrl} />
                <h3 style={{fontSize: "40px"}}>{props.googleObj.name}</h3>
                <AboutMe />
            </div>
            <div className="UserContent">
                <div className="MyMovies">
                    <MovieList listName = "My Favorite Movies" googleObj = {props.googleObj} movieList = {movies}/>
                </div>
                <br/>
                <div className="MyReviews">
                    <ReviewList googleObj = {props.googleObj} />
                </div>
            </div>
        </div> 
    )
}

export default UserPage