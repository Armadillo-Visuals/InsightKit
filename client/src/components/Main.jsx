import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import WidgetGridContainer from './widgetGridContainer';
import Navbar from './NavBar';
import '../stylesheets/main.css';

// endpoints from the backend for widgets
// /data/disasters-over-time/:state/:type
// /data/carbon-over-time/:state
// /data/disasters-all-time/:state

const Main = ({ setShowLogin }) => {
  const [userWidgets, setUserWidgets] = useState([]);

  // user's widgets are being stored inside of localStorage upon login. Grabbing the widgets from localStorage to render on page
  useEffect(() => {
    setUserWidgets(JSON.parse(localStorage.getItem('widgets')));
  }, []);

  return (
    <div className='mainWrapper'>
      <div className='mainContainer'>
        <Navbar setShowLogin={setShowLogin} />
        <div className='bodyContainer'>
          <Sidebar />
          <WidgetGridContainer widgets={userWidgets} />
        </div>
      </div>
    </div>
  );
};

export default Main;
