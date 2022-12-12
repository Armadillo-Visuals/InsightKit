import React, { Component, useState, useEffect } from 'react';
import './stylesheets/styles.css';
import Graph from './components/Graph';
import Main from './components/Main';

const App = () => {
  const [state, setStateQuerey] = useState('');
  const [disaster, setDisaster] = useState('');
  const [graphData, setGraphData] = useState(null);

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
      <Main graphData={graphData} state={state} disaster={disaster} handleClick={handleClick} />
    </div>
  );
};

export default App;
