import React, { component } from 'react';
import Graph from './Graph';
import BarChart from './BarChart';
import PieChart from './PieChart';
import Search from './search';

const Main = (props) => {
  console.log(props.graphData);
  return (
    <div className='container'>
      <Search handleClick={props.handleClick} />
      <Graph
        className='graph'
        graphData={props.graphData}
        state={props.state}
        disaster={props.disaster || 'disaster'}
      />
      <div className='pie'>
        <h2>Disasters by state</h2>
        <PieChart id='pieCanvas' typeData={props.graphData?.typeData || null} />
      </div>
    </div>
  );
};

export default Main;
