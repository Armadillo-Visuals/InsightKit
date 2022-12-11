import React, { Component, useState, useEffect } from 'react';
import './stylesheets/styles.css';
import Graph from './components/Graph';
import Main from './components/Main';

const App = () => {
  const [state, setStateQuerey] = useState('');
  const [disaster, setDisaster] = useState('');
  const [graphData, setGraphData] = useState(null);

  const handleClick = () => {
    let state = document.getElementById('state').value;
    let disaster = document.getElementById('disaster').value;
    setStateQuerey(state);
    setDisaster(disaster);
    fetch(`http://localhost:3000/api/disaster/${state}/${disaster}`)
      .then((response) => response.json())
      .then((data) => {
        setGraphData(data);
      })
      .catch((err) => console.log(err));
    // let data = {
    //     labels: ['Jun', 'Jul', 'Aug', 'Sept'],
    //     datasets: [
    //       {
    //         id: 1,
    //         label: 'icecream',
    //         data: [5, 6, 7, 8],
    //       },
    //       {
    //         id: 2,
    //         label: 'pancakes',
    //         data: [3, 2, 1, 0],
    //       },
    //     ],
    //   }
    //   setGraphData(data)
  };
  console.log('grpah data', graphData);
  return (
    <div>
      <h1>Environmental Tracker</h1>
      <Main graphData={graphData} state={state} disaster={disaster} handleClick={handleClick} />
    </div>
  );
};

export default App;
