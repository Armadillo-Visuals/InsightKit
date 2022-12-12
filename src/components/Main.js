import React, { component } from 'react';
import Graph from './Graph';
import BarChart from './BarChart';
import PieChart from './PieChart';
import Search from './search';


const Main = (props) => {
  console.log(props.graphData);
  return (
    <div>
      <h2>In the Main component!</h2>
      <Search handleClick={props.handleClick} />
      <Graph
        graphData={props.graphData}
        state={props.state}
        disaster={props.disaster || 'disaster'}
      />
      <PieChart typeData={props.graphData?.typeData || null}/>
    </div>
  );
};

export default Main;
