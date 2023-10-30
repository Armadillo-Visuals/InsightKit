/**
 * **************************************************
 *
 * @description
 * This component renders main page after sign in
 *
 * **************************************************
 */

import { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import WidgetGridContainer from './WidgetGridContainer';
import Navbar from '../NavBar';
import axios from 'axios';

const Main = ({ setShowLogin }) => {
  const [userWidgets, setUserWidgets] = useState([]);

  // User's widgets are being stored inside of localStorage upon login. Grabbing the widgets from localStorage to render on page
  useEffect(() => {
    setUserWidgets(JSON.parse(localStorage.getItem('widgets')));
  }, []);

  const addWidget = async (graphtype, datatype, parameter1, parameter2, parameter3) => {
    const { data } = await axios.patch('http://localhost:3000/users/widget', {
      userID: Number(localStorage.getItem('id')),
      graphtype,
      datatype,
      parameter1,
      parameter2,
      parameter3,
    });
    localStorage.setItem('widgets', JSON.stringify(data.widgets));

    setUserWidgets(JSON.parse(localStorage.getItem('widgets')));
  };
  const deleteWidget = async (joinID) => {
    const userID = localStorage.getItem('id');
    const { data } = await axios.delete(`http://localhost:3000/users/widget/${userID}/${joinID}`);
    localStorage.setItem('widgets', JSON.stringify(data.widgets));
    setUserWidgets(JSON.parse(localStorage.getItem('widgets')));
  };

  return (
    <div className='flex flex-col'>
      <Navbar setShowLogin={setShowLogin} />
      <div className='flex flex-row mt-[40px] h-[100vh]  m-[50px]'>
        <Sidebar addWidget={addWidget} />
        <WidgetGridContainer widgets={userWidgets} deleteWidget={deleteWidget} />
      </div>
    </div>
  );
};

export default Main;
