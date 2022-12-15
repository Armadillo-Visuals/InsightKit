import React, { Component, useState, useEffect } from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import Main from './components/Main';

const App = () => {
  const [showLogin, setShowLogin] = useState('login');

  // checks if the user has already signed in previously
  let isSignedIn = localStorage.getItem('signedIn');

  // if the user is already signed in, send them to main right away
  if (JSON.parse(isSignedIn) || showLogin === 'main') {
    return <Main setShowLogin={setShowLogin} />;
    // default the user to the login page
  } else if (showLogin === 'login') {
    return (
      <div className='title'>
        <Login showLogin={showLogin} setShowLogin={setShowLogin} />
      </div>
    );
    // render the signup page after page change in login
  } else if (showLogin === 'signup') {
    return (
      <div>
        <Signup setShowLogin={setShowLogin} showLogin={showLogin} />
      </div>
    );
  }
};

export default App;
