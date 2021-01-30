
import Homepage from './components/Homepage.jsx';
import Loginpage from './components/Loginpage.jsx';
import Login from './components/Login.js';
import Logout from './components/Logout.js';
import Logo from './components/Logo.js';
import UserPage from './components/UserPage.js';
import ReviewList from './components/ReviewList.jsx';
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
  const [name, setName] = useState('Dylan');

  return (
    <Router>
      <div className = "login-buttons">
        <Login loggedIn={loggedIn} setLoggedIn = {(bool) => setLoggedIn(bool)} setName={(name) => setName(name)}/>
        {loggedIn ? <p>Hello {name}</p>: <p>Not logged in</p> }
        <Logout loggedIn={loggedIn} setLoggedIn = {(bool) => setLoggedIn(bool)}/>
      </div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/Login" component={Loginpage} />
        <Route exact path="/User" component={UserPage} />
      </Switch>
    </Router>
  );
}

export default App;

{/* <h1 className="title">SeenIt</h1>
<p className="subheading">The Social Movie Network—in React</p> */}
