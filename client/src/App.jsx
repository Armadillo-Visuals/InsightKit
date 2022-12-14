import React, { Component, useState, useEffect } from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import Main from './components/Main';

const App = () => {
  const [state, setStateQuerey] = useState('');
  const [disaster, setDisaster] = useState('');
  const [graphData, setGraphData] = useState(null);
  const [showLogin, setShowLogin] = useState('login');

  // console.log(setShowLogin);

  useEffect(() => {
    fetch('http://localhost:3000/api/disaster/AL/Flood')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setGraphData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleClick = () => {
    const state = document.getElementById('state').value;
    const disaster = document.getElementById('disaster').value;
    setStateQuerey(state);
    setDisaster(disaster);
    fetch(`http://localhost:3000/api/disaster/${state}/${disaster}`)
      .then((response) => response.json())
      .then((data) => {
        setGraphData(data);
      })
      .catch((err) => console.log(err));
  };

  if (showLogin === 'login') {
    return (
      <div className='title'>
        <h1>Environment-IQ</h1>
        <Login showLogin={showLogin} setShowLogin={setShowLogin} />
      </div>
    );
  } else if (showLogin === 'signup') {
    return (
      <div>
        <Signup setShowLogin={setShowLogin} showLogin={showLogin} />
      </div>
    );
  } else {
    return <Main />;
  }
};

export default App;
