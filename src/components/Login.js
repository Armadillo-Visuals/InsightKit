import React, { useState, useEffect } from 'react';
import Graph from './Graph';
import Main from './Main';

const Login = ({ showLogin, setShowLogin }) => {
  // on successful login, render main
  const changePage = () => {
    setShowLogin(!showLogin);
  };

  const handleSubmit = (event) => {
    // event parameter is to target the value typed
    // event preventDefault to stop reload
    event.preventDefault();
    //use event.target[index of form].value to grab the values
    console.log('usename: ', event.target[0].value);
    console.log('password: ', event.target[1].value);
  };

  // should get a status code back from the server to confirm user after sending
  //  username and password for authentication

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type='text' name='username' placeholder='Username' />
        <input type='text' name='password' placeholder='Password' />
        <button type='submit'>Login</button>
        <button onClick={changePage}>Signup</button>
      </form>
    </div>
  );
};

export default Login;
