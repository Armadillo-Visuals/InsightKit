import React, { component } from 'react';
import Sidebar from './Sidebar';
import WidgetGridContainer from './widgetGridContainer';
import Navbar from './NavBar';
import '../stylesheets/main.css';

// endpoints from the backend for widgets
// /data/disasters-over-time/:state/:type
// /data/carbon-over-time/:state
// /data/disasters-all-time/:state

const Main = () => {
  // signout button functionality to remove local storage
  // TODO: put the actual button in, waiting until after Josh and Mia merge to avoid conflicts
  function handleSignOut() {
    localStorage.removeItem('username');
    localStorage.removeItem('id');
    localStorage.removeItem('firstName');
    localStorage.removeItem('widgets');
  }

  return (
    <div className='mainWrapper'>
      <div className='mainContainer'>
        <Navbar />
        <div className='bodyContainer'>
          <Sidebar />
          <WidgetGridContainer />
        </div>
      </div>
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
