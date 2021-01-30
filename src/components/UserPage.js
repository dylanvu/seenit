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

const UserPage = () => {
    return(
        <div>
            <div className="user">
                <UserPic />
                <img src ="https://i.ytimg.com/vi/4y_lc8m4vSc/hqdefault.jpg" />
                <h3>Alex Mei</h3>
                <AboutMe />
            </div>
            
            <div className="MyMovies">
            </div>

            <div className="MyReviews">
                <ReviewList />
            </div>
        </div>
    )
}

export default UserPage