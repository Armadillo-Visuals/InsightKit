import React from 'react';
import Widget from './widget';
import '../stylesheets/widgetGridContainer.css';

// const widgetTest = [
//   {
//     graphType: 'line',
//     dataType: 'disasters-over-time',
//     parameter1: 'NY',
//     parameter2: 'Fire',
//     parameter3: null,
//   },
//   {
//     graphType: 'pie',
//     dataType: 'disasters-all-time',
//     parameter1: 'NY',
//     parameter2: null,
//     parameter3: null,
//   },
//   {
//     graphType: 'line',
//     dataType: 'carbon-over-time',
//     parameter1: 'NY',
//     parameter2: null,
//     parameter3: null,
//   },
// ];

const WidgetGridContainer = ({ widgets, deleteWidget }) => {
  // axios request to get all the widgets assigned to the user
  // loop through the assigned widgets and populate widgets
  // an array of widgets containing datatype, graphtype and the parameters
  const widgetArray = widgets.map((widget, i) =>
    <Widget widgetInfo={widget} deleteWidget={deleteWidget} key={'widget' + i} />
  );

  return (
    <div className='widgetGridWrapper'>
      <div className='widgetGridContainer'>{widgetArray}</div>
    </div>
  );
};

export default WidgetGridContainer;
