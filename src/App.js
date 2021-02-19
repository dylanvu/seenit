import Homepage from './components/Homepage.jsx';
import Logo from './components/Logo.js';
import Loginpage from './components/Loginpage.jsx';
import Login from './components/Login.js';
import Logout from './components/Logout.js';
import UserPage from './components/UserPage.js';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { render } from '@testing-library/react';


import './App.css';

// Note that App() must return only a single set
// If we want to redirect pages,: https://reactrouter.com/web/guides/quick-start

function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const [googleObj, setGoogleObj] = useState()
  const [name, setName] = useState();
  const [picURL, setURL] = useState();

  return (
    <Router>
      <div className = "login-buttons">
        {/* {loggedIn ? <Logout loggedIn={loggedIn} setLoggedIn = {(bool) => setLoggedIn(bool)} setGoogleObj={(obj) => setGoogleObj(obj)}/> : 
        <Login loggedIn={loggedIn} setLoggedIn = {(bool) => setLoggedIn(bool)} setName={(name) => setName(name)} picURL={picURL} setURL={(url) => setURL(url)} 
          setGoogleObj={(obj) => setGoogleObj(obj)}/>}
        {loggedIn ? <p>&nbsp;Hello {googleObj.name}&nbsp;</p>: <p>&nbsp;Not logged in. Please log in.&nbsp;</p> } */}


        {loggedIn ? 
        <Logout loggedIn={loggedIn} setLoggedIn = {(bool) => setLoggedIn(bool)} setGoogleObj={(obj) => setGoogleObj(obj)}/>
        :
        <Login loggedIn={loggedIn} setLoggedIn = {(bool) => setLoggedIn(bool)} setGoogleObj={(obj) => setGoogleObj(obj)}/>}
        <p>{googleObj ? `Welcome ${googleObj.name}!` : `not logged in`}</p>
        
      </div>
      <Logo />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/Login" component={Loginpage}></Route>
        <Route exact path="/User">
          {googleObj ? <UserPage googleObj = {googleObj} /> : <p>Please log in</p>}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

{/* <h1 className="title">SeenIt</h1>
<p className="subheading">The Social Movie Network—in React</p> */}

// Note: we have an issue with MovieList and MyMovieList. Right now, we aren't passing googleProfileObj into MovieList (which is why the button doesn't work to add the movie to the database)