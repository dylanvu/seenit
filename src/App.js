import Homepage from './components/Homepage.jsx';
import logo from './components/logo.png'
import Login from './components/Login.js';
import Logout from './components/Logout.js';
import UserPage from './components/UserPage.js';
import MoviePage from './components/MoviePage';
import SearchPage from './components/SearchPage.js';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import './App.css';

// Note that App() must return only a single set
// If we want to redirect pages,: https://reactrouter.com/web/guides/quick-start

function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const [googleObj, setGoogleObj] = useState();
  const [API_id, setAPI_id] = useState();

  return (
    <Router>
      {/* <Logo status={loggedIn}/> */}
      <div className="navbar">
        <div className="headingColimg">
          <Link to ="/" className="link"><img className="Logo" src={logo} height="100" alt="SeenIt logo"/></Link>
        </div>
        <div className="headingCol">
          <h1 className="title">SeenIt</h1>
          <p className="subheading">The Social Movie Network in React</p>
        </div>
        <div className="headingCol">
            <p className="headingText">
              <Link to = "/Search" className="link">Search for a movie</Link>
            </p>
        </div>
        <div className="headingCol">
          {loggedIn ? 
          <p className="headingText">
            <Link to = "/User" className="link">View Profile</Link>
          </p>
          : 
          <p className="headingText">
              Log in to view profile
          </p>
          }
        </div>
        <div className="headingCol">
          <div div className = "login-buttons">
            <div>
              {loggedIn ? 
              <Logout loggedIn={loggedIn} setLoggedIn = {(bool) => setLoggedIn(bool)} setGoogleObj={(obj) => setGoogleObj(obj)}/>
              :
              <Login loggedIn={loggedIn} setLoggedIn = {(bool) => setLoggedIn(bool)} setGoogleObj={(obj) => setGoogleObj(obj)}/>}
            </div>
            <div>
              <p className="headingText">&nbsp; {googleObj ? `Welcome back, ${googleObj.name}!` : `Not logged in. Please log in.`}&nbsp;</p>
            </div>
          </div>
        </div>
      </div>
      <Switch>
        <Route exact path="/">
          <Homepage googleObj = {googleObj} setAPI_id = {(API_id) => setAPI_id(API_id)}/>
        </Route>
        <Route exact path="/Movie">
          <MoviePage googleObj = {googleObj} API_id = {API_id}/>
        </Route>
        <Route exact path="/User">
          {googleObj ? <UserPage googleObj = {googleObj} setAPI_id = {(API_id) => setAPI_id(API_id)} /> : <p></p>}
        </Route>
        <Route exact path="/Search">
          <SearchPage googleObj = {googleObj} setAPI_id = {(API_id) => setAPI_id(API_id)} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;