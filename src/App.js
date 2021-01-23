
import './App.css';
import Movie from './components/Movie.jsx'
import MovieList from './components/MovieList.js'

var movies = {
  url: "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/masterrepository/Fandango/223960/FND_poster_TheMarksman_InTheaters.jpg"
}

// Note that App() must return only a single set
// If we want to redirect pages,: https://reactrouter.com/web/guides/quick-start

function App() {
  return (
      <div className="App">
        <MovieList listName = "Top Rated Movies"/>
        <Movie url={movies.url}/>
      </div>
  );
}

export default App;

