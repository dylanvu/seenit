
import './App.css';
import Movie from './components/Movie.jsx'
import MovieList from './components/MovieList.js'

var movies = {
  title: "Wonder Woman 1984",
  url: "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/masterrepository/Fandango/212474/FND_poster_WonderWoman84_InTheaters.jpg"
}

// Note that App() must return only a single set
// If we want to redirect pages,: https://reactrouter.com/web/guides/quick-start

function App() {
  return (
      <div className="App">
        <MovieList listName = "Top Rated Movies"/>
        <Movie title={movies.title} url={movies.url}/>
        <button type="button">Sign into SeenIt</button>
      </div>
  );
}

export default App;

