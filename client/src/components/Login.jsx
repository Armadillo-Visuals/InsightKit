import React, { useState, useEffect } from 'react';
import Main from './Main';
import axios from 'axios';
import '../stylesheets/login.css';

const Login = ({ showLogin, setShowLogin }) => {
  const changePage = (page) => {
    setShowLogin(page);
  };

  const handleLoginAttempt = (event) => {
    // event parameter is to target the value typed
    // event preventDefault to stop reload
    event.preventDefault();
    const username = event.target[0].value;
    const password = event.target[1].value;
    //use event.target[index of form].value to grab the values
    console.log('usename: ', username);
    console.log('password: ', password);
    authenticateUser(username, password);
  };

  // should get a status code back from the server to confirm user after sending
  //  username and password for authentication

  // post request to the backend to authenticate the user
  // returns id, firstname, last name, username, hashed password, and array of widget objects
  async function authenticateUser(username, password) {
    try {
      const response = await axios.post('http://localhost:3000/users/login', {
        username,
        password,
      });
      console.log('response from server: ', response.data);
      const user = response.data.username;
      const id = response.data.id;
      const widgets = response.data.widgets;
      const first = response.data.firstname;
      console.log('extracted out properties');

      // set cookies for the username and their active status
      // IDK if this actually works

      // store the array of widget objects to have other widget pages to access that stored information
      localStorage.setItem('username', user);
      localStorage.setItem('id', JSON.stringify(id));
      localStorage.setItem('firstName', first);
      localStorage.setItem('widgets', JSON.stringify(widgets));
      changePage('main');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className='mainWrapper'>
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

            <input type='text' name='password' placeholder='Password' />
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
