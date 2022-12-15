import React, { useState } from 'react';
import StateDropdown from './StateDropdown';
import DisasterDropdown from './disasterDropdown';
import '../stylesheets/sidebar.css';
// endpoints from the backend for widgets
// /data/disasters-over-time/:state/:type
// /data/carbon-over-time/:state
// /data/disasters-all-time/:state

const Sidebar = ({ addWidget }) => {
  //    post request to send the user's selected options
  // create url variables for each endpoint
  // have a single axios request that can send post requests to a passed in url
  // have on click functions that pass the parameters and new url to axios request
  const [stateDOT, setStateDOT] = useState('AL');
  const [disasterDOT, setDisasterDOT] = useState('Flood');
  const [stateDPC, setStateDPC] = useState('AL');
  const [stateCOT, setStateCOT] = useState('AL');

  const addDisastersOverTime = () => {
    addWidget('line', 'disasters-over-time', stateDOT, disasterDOT, null);
  };
  const addDisastersAllTime = () => {
    addWidget('pie', 'disasters-all-time', stateDPC, null, null);
  };
  const addCarbonOverTime = () => {
    addWidget('line', 'carbon-over-time', stateCOT, null, null);
  };

  return (
    <div className='sidebarWrapper'>
      <div className='sidebarContainer'>
        <div className='disastersOverTimeSelector'>
          <h1>Disasters Over Time</h1>
          <StateDropdown handleSelect={(e) => setStateDOT(e.target.value)} />
          <DisasterDropdown handleSelect={(e) => setDisasterDOT(e.target.value)} />
          <button onClick={addDisastersOverTime}>+</button>
        </div>
        <div className='disasterPieChartSelector'>
          <h1>Disasters Pie Chart</h1>
          <StateDropdown handleSelect={(e) => setStateDPC(e.target.value)} />
          <button onClick={addDisastersAllTime}>+</button>
        </div>
        <div className='carbonOverTimeSelector'>
          <h1>Carbon Over Time</h1>
          <StateDropdown handleSelect={(e) => setStateCOT(e.target.value)} />
          <button onClick={addCarbonOverTime}>+</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
