import React, { Component, useState, useEffect } from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import Main from './components/Main';

const App = () => {
  const [state, setStateQuerey] = useState('');
  const [disaster, setDisaster] = useState('');
  const [graphData, setGraphData] = useState(null);
  const [showLogin, setShowLogin] = useState('login');
  const [signedIn, setSignedIn] = useState(false);

  // check if the user is already signed in ()

  // useEffect(() => {
  //   fetch('http://localhost:3000/api/disaster/AL/Flood')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setGraphData(data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  // const handleClick = () => {
  //   const state = document.getElementById('state').value;
  //   const disaster = document.getElementById('disaster').value;
  //   setStateQuerey(state);
  //   setDisaster(disaster);
  //   fetch(`http://localhost:3000/api/disaster/${state}/${disaster}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setGraphData(data);
  //     })
  //     .catch((err) => console.log(err));
  // };

  let isSignedIn = localStorage.getItem('signedIn');

  if (JSON.parse(isSignedIn) || showLogin === 'main') {
    return <Main setShowLogin={setShowLogin} setSignedIn={setSignedIn} />;
  } else if (showLogin === 'login') {
    return (
      <div className='title'>
        <Login showLogin={showLogin} setShowLogin={setShowLogin} setSignedIn={setSignedIn} />
      </div>
    );
  } else if (showLogin === 'signup') {
    return (
      <div>
        <Signup setShowLogin={setShowLogin} showLogin={showLogin} />
      </div>
    );
  }
};

export default App;
