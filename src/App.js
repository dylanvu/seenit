
import './App.css';
import Homepage from './components/Homepage.jsx'
import Loginpage from './components/Loginpage.jsx'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { render } from '@testing-library/react';

// Note that App() must return only a single set
// If we want to redirect pages,: https://reactrouter.com/web/guides/quick-start

function App() {
  return (
    <Router>
      <h1 className="title">SeenIt</h1>
      <p className="subheading">The Social Movie Network in React</p>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/Login" component={Loginpage} />
      </Switch>
    </Router>
  );
}

// function App() {
//   return (
//     <Router>
//       <div>
//         <div className="App">
//           <MovieList listName = {topMovies.listName} moviesList={topMovies.moviesList}/>
//           <p>
//             <Link to="/Login">Log In</Link>
//           </p>
//           <Switch>
//             <Route exact path= "/Login">
//               <Login />
//             </Route> 
//           </Switch>
//         </div>
//       </div>
//     </Router>
//   );
// }

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
