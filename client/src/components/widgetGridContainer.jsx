import React from 'react';
import Widget from './widget';
import '../stylesheets/widgetGridContainer.css';

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
