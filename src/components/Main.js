import React, { component } from 'react';
import Graph from './Graph';
import BarChart from './BarChart';
import PieChart from './PieChart';
import Search from './search';
import Sidebar from './Sidebar';
import WidgetGridContainer from './widgetGridContainer';

// endpoints from the backend for widgets
// /data/disasters-over-time/:state/:type
// /data/carbon-over-time/:state
// /data/disasters-all-time/:state

const Main = () => {
  return (
    <div className='mainContainer'>
      <Sidebar />
      <WidgetGridContainer />
    </div>
  );
};

export default Main;

{
  /* <Search handleClick={props.handleClick} />
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
</div> */
}
