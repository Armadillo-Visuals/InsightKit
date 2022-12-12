import React, { component } from 'react';
import Graph from './Graph';
import Search from './search';

const Main = (props) => {
  return (
    <div className='container'>
      {/* <h1>Environmental Tracker</h1> */}
      <Search handleClick={props.handleClick} />
      <Graph
        className='graph'
        graphData={props.graphData}
        state={props.state}
        disaster={props.disaster}
      />
    </div>
  );
};

export default Main;
