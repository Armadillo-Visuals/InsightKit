import React, { component } from 'react';
import Graph from './Graph';
import Search from './search';

const Main = (props) => {
  return (
    <div>
      <h2>In the Main component!</h2>
      <Search handleClick={props.handleClick} />
      {props.graphData && (
        <Graph graphData={props.graphData} state={props.state} disaster={props.disaster} />
      )}
    </div>
  );
};

export default Main;
