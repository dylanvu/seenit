
import './App.css';
import Movie from './components/Movie.jsx'
import MovieList from './components/MovieList.js'
import Login from './components/Login.js'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { render } from '@testing-library/react';



var topMovies = {
  listName: "Top Rated Movies",
  moviesList: {
    url: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
    title: "Interstellar"
  }
}

// Note that App() must return only a single set
// If we want to redirect pages,: https://reactrouter.com/web/guides/quick-start

function App() {
  return (
    <Router>
      <div>
        <div className="App">
          <MovieList listName = {topMovies.listName} moviesList={topMovies.moviesList}/>
          <p>
            <Link to="/Login">Log In</Link>
          </p>
          <Switch>
            <Route exact path= "/Login">
              <Login />
            </Route> 
          </Switch>
        </div>
      </div>
    </Router>
  );
}

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <MovieList />
//         <Switch>
//           <Route path = "/" component = {MovieList}/>
//           <Route path = "/Login" component={Login}/>
//         </Switch>
//       </div>
//     </Router>
//   )
// }


export default App;

function Logintest() {
  return (
    <div>
<h2>  g in below</h2> 
      <Login/>
    </div>
  )
}