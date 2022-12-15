import React from 'react';
import '../stylesheets/dropdown.css';

const disasterDropdown = ({ handleSelect }) => {
  return (
    <div className='disasterDropdown'>
      <label htmlFor='disaster'></label>
      <select className='dropbtn' id='disaster' name='disaster' onChange={handleSelect}>
        <option value='Flood'>Flood</option>
        <option value='Fire'>Fire</option>
        <option value='Earthquake'>Earthquake</option>
        <option value='SevereStorms'>Severe Storm</option>
        <option value='Hurricane'>Hurricane</option>
        <option value='Tornado'>Tornado</option>
        <option value='Freezing'>Freezing</option>
        <option value='Drought'>Drought</option>
        <option value='All'>All</option>
      </select>
    </div>
  );
};

export default disasterDropdown;
