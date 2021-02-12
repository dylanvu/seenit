import Homepage from './components/Homepage.jsx';
import Logo from './components/Logo.js';
import Loginpage from './components/Loginpage.jsx';
import Login from './components/Login.js';
import Logout from './components/Logout.js';
import UserPage from './components/UserPage.js';
import MoviePage from './components/MoviePage';
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
  const [name, setName] = useState();
  const [picURL, setURL] = useState();

  return (
    <Router>
      <div className = "login-buttons">
        {loggedIn ? <p>&nbsp;Hello {name}&nbsp;</p>: <p>&nbsp;Not logged in. Please log in.&nbsp;</p> }
        {loggedIn ? <Logout loggedIn={loggedIn} setLoggedIn = {(bool) => setLoggedIn(bool)} />: 
        <Login loggedIn={loggedIn} setLoggedIn = {(bool) => setLoggedIn(bool)} setName={(name) => setName(name)} picURL={picURL} setURL={(url) => setURL(url)}/>}
      </div>
      <Logo />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/Movie" component={MoviePage} />
        <Route exact path="/Login" component={Loginpage} />
        <Route exact path="/User">
          <UserPage name={loggedIn ? name: "Not logged in"} picURL={loggedIn ? picURL: "https://i.stack.imgur.com/34AD2.jpg"}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

{/* <h1 className="title">SeenIt</h1>
<p className="subheading">The Social Movie Network—in React</p> */}
