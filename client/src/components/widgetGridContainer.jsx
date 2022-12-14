import React from 'react';
import Widget from './widget';

const WidgetGridContainer = () => {
  // axios request to get all the widgets assigned to the user
  // loop through the assigned widgets and populate widgets
  return (
    <div className='widgetGridDiv'>
      <Widget />
    </div>
  );
};

export default WidgetGridContainer;
