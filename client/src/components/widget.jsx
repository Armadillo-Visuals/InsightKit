import React from 'react';
import DisastersOverTime from './DisastersOverTime';
import CarbonOverTime from './CarbonOverTime';
import DisasterPieChart from './DisasterPieChart';
import '../stylesheets/widget.css';

const Widget = ({ widgetInfo, deleteWidget }) => {
  // NOTE: added an "id" property to each widget object which can be used to
  // delete that widget from the user's widgets array
  const { graphtype, datatype, parameter1, parameter2, parameter3, id } = widgetInfo;

  let renderedWidget;

  // if the graph type is pie and the data type is disasters-all-time, render piechart.jsx
  // with parameter1
  if (graphtype === 'pie' && datatype === 'disasters-all-time') {
    renderedWidget = <DisasterPieChart state={parameter1} />;
  }

  // if the graph type is line and the data type is carbon-over-time, render CarbonOverTime.jsx
  // with parameter 1
  if (graphtype === 'line' && datatype === 'carbon-over-time') {
    renderedWidget = <CarbonOverTime state={parameter1} />;
  }

  // if the graph type is line and the data type is disasters-over-time, render graph.jsx
  // with parameters 1 and 2
  if (graphtype === 'line' && datatype === 'disasters-over-time') {
    renderedWidget = <DisastersOverTime state={parameter1} disaster={parameter2} />;
  }

  return (
    <div className='widget'>
      <button className='widgetDeleteBtn' onClick={() => deleteWidget(id)}>X</button>
      {renderedWidget}
    </div>
  );
};

export default Widget;
