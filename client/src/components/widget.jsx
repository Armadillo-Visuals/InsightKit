import React from 'react';
import DisastersOverTime from './DisastersOverTime';
import CarbonOverTime from './CarbonOverTIme';
import DisasterPieChart from './DisasterPieChart';

const widgetTest = {
  graphType: 'pie',
  dataType: 'disasters-all-time',
  parameter1: 'CA',
  parameter2: null,
  parameter3: null,
};

const Widget = () => {
  // const { graphType, dataType, parameter1, parameter2, parameter3 } = widgetInfo;

  // if the graph type is pie and the data type is disasters-all-time, render piechart.jsx
  // with parameter1

  // if the graph type is line and the data type is carbon-over-time, render CarbonOverTime.jsx
  // with parameter 1

  // if the graph type is line and the data type is disasters-over-time, render graph.jsx
  // with parameters 1 and 2

  return (
    <div className='widget'>
      {/* <DisastersOverTime state='CA' disaster='Fire' />
      <CarbonOverTime state='CA' /> */}
      <DisasterPieChart state='CA' />
    </div>
  );
};

export default Widget;
