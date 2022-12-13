import React, { Component, useState, useEffect } from 'react';
import './stylesheets/styles.css';
import Login from './components/Login';
import Signup from './components/Signup';

const App = () => {
  const [state, setStateQuerey] = useState('');
  const [disaster, setDisaster] = useState('');
  const [graphData, setGraphData] = useState(null);
  const [showLogin, setShowLogin] = useState(true);

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
  return (
    <div className='title'>
      <h1>Environmental Tracker</h1>
      {showLogin ? (
        <Login showLogin={showLogin} setShowLogin={setShowLogin} />
      ) : (
        <Signup setShowLogin={setShowLogin} showLogin={showLogin} />
      )}
      {/* <Main graphData={graphData} state={state} disaster={disaster} handleClick={handleClick} />  */}
    </div>
  );
};

export default App;
