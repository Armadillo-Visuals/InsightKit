import React from 'react';
import StateDropdown from './StateDropdown';
import DisasterDropdown from './disasterDropdown';
// endpoints from the backend for widgets
// /data/disasters-over-time/:state/:type
// /data/carbon-over-time/:state
// /data/disasters-all-time/:state

const Sidebar = () => {
  //    post request to send the user's selected options
  // create url variables for each endpoint
  // have a single axios request that can send post requests to a passed in url
  // have on click functions that pass the parameters and new url to axios request

  return (
    <div className='sidebarContainer'>
      <div className='disastersWidget'>
        <h1>DisasterPie</h1>
        <StateDropdown />
        <DisasterDropdown />
        <button>+</button>
      </div>
      <div className='carbonWidget'>
        <h1>Air Quality</h1>
        <StateDropdown />
        <button>+</button>
      </div>
      <div className='disastersAllTimeWidget'>
        <h1>Distasters by State</h1>
        <StateDropdown />
        <button>+</button>
      </div>
    </div>
  );
};

export default Sidebar;
