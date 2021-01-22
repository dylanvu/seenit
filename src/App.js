import logo from './logo.svg';
import './App.css';
import Movie from './components/Movie.jsx'

var movies = {
  title: "Wonder Woman 1984",
  url: "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/masterrepository/Fandango/212474/FND_poster_WonderWoman84_InTheaters.jpg"
}

// Note that App() must return only a single set
// If we want to redirect pages,: https://reactrouter.com/web/guides/quick-start

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
          <Movie title={movies.title} url={movies.url}/>
      </div>
  );
}

export default App;

