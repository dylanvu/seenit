import PropTypes from 'prop-types'
import Movie from './Movie.jsx'

var interstellar = {
    url: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
    name: interstellar
}

const MovieList = (props) => {
    return (
        <div>
            <div className = "movieListTitle">
                <header >{props.listName}</header>
            </div>
            <div className = "flex">
                <Movie url = {interstellar.url} name = {interstellar.name}/>
                <Movie url = {interstellar.url} name = {interstellar.name}/>
                <Movie url = {interstellar.url} name = {interstellar.name}/>
                <Movie url = {interstellar.url} name = {interstellar.name}/>
                <Movie url = {interstellar.url} name = {interstellar.name}/>
            </div>
        </div>
    )
}

MovieList.defaultProps = {
    listName: 'List Name',
}

MovieList.propTypes = {
    listName: PropTypes.string,
}



export default MovieList
