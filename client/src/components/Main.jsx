import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import WidgetGridContainer from './widgetGridContainer';
import Navbar from './NavBar';
import '../stylesheets/main.css';
import axios from 'axios';

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

  const addWidget = async (graphtype, datatype, parameter1, parameter2, parameter3) => {
    // send a patch request to 'http://localhost:3000/users/widget' with the following:
    // userID should come from Number(localStorage.getItem('id')) (or JSON.parse??)
    // graphType, dataType, parameter1, parameter2, parameter3 values should come from sidebar event
    const response = await axios.patch('http://localhost:3000/users/widget', {
      userID: Number(localStorage.getItem('id')),
      graphtype,
      datatype,
      parameter1,
      parameter2,
      parameter3,
    });
    localStorage.setItem('widgets', JSON.stringify(response.data.widgets));
    setUserWidgets(JSON.parse(localStorage.getItem('widgets')))
    // setUserWidgets(response.data.widgets)
  };

  const deleteWidget = async (joinID) => {
    const userID = localStorage.getItem('id');
    const response = await axios.delete(
      `http://localhost:3000/users/widget/${userID}/${joinID}`, 
    );
    localStorage.setItem('widgets', JSON.stringify(response.data.widgets));
    setUserWidgets(JSON.parse(localStorage.getItem('widgets')))
    // setUserWidgets(response.data.widgets)
  }

  return (
    // <div className='mainWrapper'>
      <div className='mainContainer'>
        <Navbar setShowLogin={setShowLogin} />
        <div className='bodyContainer'>
          <Sidebar addWidget={addWidget} />
          <WidgetGridContainer widgets={userWidgets} deleteWidget={deleteWidget} />
        </div>
      </div>
    // </div>
  );
};

export default Main;
