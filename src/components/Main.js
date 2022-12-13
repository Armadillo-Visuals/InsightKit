import React, { component } from 'react';
import Graph from './Graph';
import BarChart from './BarChart';
import PieChart from './PieChart';
import Search from './search';

const Main = (props) => {
  return (
    <div className='container'>
      <Search handleClick={props.handleClick} />
      {props.graphData?.carbon && (
        <Graph
          className='graph'
          graphData={props.graphData}
          state={props.state || 'AL'}
          disaster={props.disaster || 'Disaster'}
        />
      )}
      <div className='pie'>
        <h2>Disasters by State</h2>
        <PieChart id='pieCanvas' typeData={props.graphData?.typeData || null} />
      </div>
    </div>
  );
};

export default Main;
