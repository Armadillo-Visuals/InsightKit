import React from 'react';

const disasterDropdown = () => {
  return (
    <div className='disasterDropdown'>
      <label htmlFor='disaster'></label>
      <select className='dropbtn' id='disaster' name='disaster'>
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
