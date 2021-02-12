import MovieList from './MovieList'
import AboutMe from './AboutMe.js'
import ReviewList from './ReviewList'
import UserPic from './UserPic.js'
import { useState } from 'react'

/*
let favorite_Movies = {
    listName: "Favorite Movies",
    moviesList: {
        url: "",
        title: ""
    }
}
*/

/*
const favorite_Movies = () => {
    const[movies, setMovies] = useState([
        {
            id: 1,
            movie: "La La Land",
            url: "https://upload.wikimedia.org/wikipedia/en/a/ab/La_La_Land_%28film%29.png",
        },
        {
            id: 2,
            movie: "Your Name",
            url: "https://upload.wikimedia.org/wikipedia/en/0/0b/Your_Name_poster.png"
        }
    ])
}
*/

const UserPage = (props) => {

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
    ])

const listName = "My Top-Rated Movies"

    return(
        <div class="UserPageFlex">
            <div className="user">
                {/* <UserPic /> Disabled this component for now since it is broken*/}
                {/* <img src ="https://i.ytimg.com/vi/4y_lc8m4vSc/hqdefault.jpg" /> */}
                <img src ={props.picURL} width="150px"/>
                <h3 style={{fontSize: "40px"}}>{props.name}</h3>
                <AboutMe />
            </div>
            <div className="UserContent">
                <div className="MyMovies">
                    <MovieList list = {movies} name = {listName}/>
                </div>
                <br/>
                <div className="MyReviews">
                    <ReviewList />
                </div>
            </div>
        </div>
    )
}

export default UserPage