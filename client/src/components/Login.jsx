import React, { useState, useEffect } from 'react';
import Main from './Main';
import axios from 'axios';
import '../stylesheets/login.css';

const Login = ({ showLogin, setShowLogin, setSignedIn }) => {
  // change the page to either main or submit
  const changePage = (page) => {
    setShowLogin(page);
  };

  // Event handler for the login form
  function handleLoginAttempt(event) {
    // event preventDefault to stop reload
    event.preventDefault();
    const username = event.target[0].value;
    const password = event.target[1].value;
    // authenticate the user with the given username and password
    authenticateUser(username, password);
  }

  // post request to the backend to authenticate the user
  // returns id, firstname, last name, username, hashed password, and array of widget objects
  async function authenticateUser(username, password) {
    try {
      const response = await axios.post('http://localhost:3000/users/login', {
        username,
        password,
      });
      const user = response.data.username;
      const id = response.data.id;
      const widgets = response.data.widgets;
      const first = response.data.firstname;

      // set the values on localStorage. Local Storage values must always be strings
      localStorage.setItem('username', user);
      localStorage.setItem('id', JSON.stringify(id));
      localStorage.setItem('firstName', first);
      localStorage.setItem('widgets', JSON.stringify(widgets));
      localStorage.setItem('signedIn', 'true');
      // render the main page instead of the login page
      changePage('main');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className='mainLoginWrapper'>
      <div className='loginWrapper'>
        <div className='loginContents'>
          <img id='leafLogo' src='https://i.imgur.com/SVGPzBH.png'></img>
          <br />
          <img id='homeLogo' src='https://i.imgur.com/mrT2pHx.png'></img>
          <br />
          <img id='loginLogo' src='https://i.imgur.com/Oi5B7XJ.png'></img>
        </div>

        <div className='loginForm'>
          <form onSubmit={(e) => handleLoginAttempt(e)}>
            <input type='text' name='username' placeholder='Username' />
            <br />
            <br />

            <input type='password' name='password' placeholder='Password' />
            <br />
            <br />
            <button id='loginButton' type='submit'>
              Enter
            </button>
          </form>
        </div>
        <br />
        <br />
        <br />
        <br />

        <div className='signup'>
          <img id='signUpLogo' src='https://i.imgur.com/6S45Suy.png'></img>
          <br />

          <button id='signupButton' onClick={() => changePage('signup')}>
            Sign up!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
