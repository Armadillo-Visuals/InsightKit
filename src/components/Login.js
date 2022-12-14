import React, { useState, useEffect } from 'react';
import Graph from './Graph';
import Main from './Main';
import axios from 'axios';
import '../stylesheets/login.css';

const Login = ({ showLogin, setShowLogin }) => {
  const changePage = (page) => {
    setShowLogin(page);
  };

  const handleSubmit = (event) => {
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
  async function authenticateUser(username, password) {
    try {
      const response = await axios.post('/user', {
        username,
        password,
      });
      console.log('response from server: ', response);
      // set cookies for the username and their active status
      // IDK if this actually works
      localStorage.setItem('username', username);
      localStorage.setItem('active', response);
    } catch (error) {
      console.error(error);
    }
  }

  // function to see if the user is active, and therefore to show the main component
  const checkCookies = () => {
    const active = localStorage.getItem('active');
    if (active === true) {
      changeToMain();
    }
  };

  return (
    <div className='loginForm'>
      <h1>Login</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type='text' name='username' placeholder='Username' />
        <br></br>
        <input type='text' name='password' placeholder='Password' />
        <br></br>
        <button type='submit'>Login</button>
        <button onClick={() => changePage('main')}>Main</button>
        <button onClick={() => changePage('signup')}>Sign up!</button>
      </form>
    </div>
  );
};

export default Login;
