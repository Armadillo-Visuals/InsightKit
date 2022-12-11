import React, { Component, useState } from 'react';
import './stylesheets/styles.css';
import Graph from './components/Graph';
import Main from './components/Main';

const App = () => {
  const [state, setStateQuerey] = useState('');
  const [disaster, setDisaster] = useState('');
  const [graphData, setGraphData] = useState({
    labels: ['Jun', 'Jul', 'Aug', 'Sept'],
    datasets: [
      {
        id: 1,
        label: 'pie',
        data: [5, 6, 7, 8],
      },
      {
        id: 2,
        label: 'cupcake',
        data: [3, 2, 1, 0],
      },
    ],
  });
  const handleClick = () => {
    let state = document.getElementById('state').value;
    let disaster = document.getElementById('disaster').value;
    setStateQuerey(state);
    setDisaster(disaster);
    console.log(`/disaster/${state}/${disaster}`);
    fetch(`/disaster/${state}/${disaster}`)
      .then((response) => response.json())
      .then((data) => setGraphData(data));
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
  console.log('state', graphData);
  return (
    <div>
      <h1>Environmental Tracker</h1>
      <Main graphData={graphData} state={state} disaster={disaster} handleClick={handleClick} />
    </div>
  );
};

export default App;
