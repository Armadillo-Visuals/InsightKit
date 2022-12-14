import React from 'react';
import Widget from './widget';
import '../stylesheets/widgetGridContainer.css';

const WidgetGridContainer = () => {
  // axios request to get all the widgets assigned to the user
  // loop through the assigned widgets and populate widgets
  return (
    <div className='widgetGridWrapper'>
      <div className='widgetGridContainer'>
        <Widget />
      </div>
    </div>
  );
};

export default WidgetGridContainer;
