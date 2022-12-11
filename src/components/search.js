// Class Search extends Component

import React, { component } from 'react';

// export const handleClick = () => {
//     console.log('y')
//     let number = document.getElementById('number')
//     let transportation = document.getElementById('transportation')
//     fetch('/getdata', {
//         method: 'POST',
//         headers: {
//             'Content-type': 'Application/JSON'
//         },
//         body: JSON.stringify({passengers: number, transportation: transportation})
//     })
// }

const Search = (props) => {
  // const handleClick = () => {
  //     let state = document.getElementById('state').value
  //     let disaster = document.getElementById('disaster').value
  //     // console.log(`/disaster/${state}/${disaster}`)
  //     // fetch(`/disaster/${state}/${disaster}`)
  //     // .then((response) => response.json())
  //     // .then((data) => setGraphData(data));
  //     let data = {
  //         labels: ['Jun', 'Jul', 'Aug', 'Sept'],
  //         datasets: [
  //           {
  //             id: 1,
  //             label: 'icecream',
  //             data: [5, 6, 7, 8],
  //           },
  //           {
  //             id: 2,
  //             label: 'pancakes',
  //             data: [3, 2, 1, 0],
  //           },
  //         ],
  //       }
  //       setGraphData(data)
  // }

  return (
    <div>
      <label htmlFor='byState'>State:</label>
      <select id='state' name='state'>
        <option value='Alabama'>Alabama</option>
        <option value='Alaska'>Alaska</option>
        <option value='Arkansas'>Arkansas</option>
        <option value='California'>California</option>
        <option value='Colorado'>Colorado</option>
        <option value='Conneticut'>Conneticut</option>
        <option value='Delaware'>Delaware</option>
        <option value='Florida'>Florida</option>
        <option value='Georgia'>Georgia</option>
        <option value='Hawaii'>Hawaii</option>
        <option value='Idaho'>Idaho</option>
        <option value='Illinois'>Illinois</option>
        <option value='Indiana'>Indiana</option>
        <option value='Iowa'>Iowa</option>
        <option value='Kansas'>Kansas</option>
        <option value='Kentucky'>Kentucky</option>
        <option value='Louisiana'>Louisiana</option>
        <option value='Maine'>Maine</option>
        <option value='Maryland'>Maryland</option>
        <option value='Massachussets'>Massachussets</option>
        <option value='Michigan'>Michigan</option>
        <option value='Minnesota'>Minnesota</option>
        <option value='Mississippi'>Mississippi</option>
        <option value='Missouri'>Missouri</option>
        <option value='Montana'>Montana</option>
        <option value='Nebraska'>Nebraska</option>
        <option value='Nevada'>Nevada</option>
        <option value='Nebraska'>Nebraska</option>
        <option value='Nevada'>Nevada</option>
        <option value='New Hampshire'>New Hampshire</option>
        <option value='New Jersey'>New Jersey</option>
        <option value='New Mexico'>New Mexico</option>
        <option value='New York'>New York</option>
        <option value='North Carolina'>North Carolina</option>
        <option value='North Dakota'>North Dakota</option>
        <option value='Ohio'>Ohio</option>
        <option value='Oklahoma'>Oklahoma</option>
        <option value='Oregon'>Oregon</option>
        <option value='Pennsylvania'>Pennsylvania</option>
        <option value='Rhode Island'>Rhode Island</option>
        <option value='South Carolina'>south Carolina</option>
        <option value='Tennessee'>Tennessee</option>
        <option value='Texas'>Texas</option>
        <option value='Utah'>Utah</option>
        <option value='Vermont'>Vermont</option>
        <option value='Virginia'>Virginia</option>
        <option value='Washington'>Washington</option>
        <option value='Washington DC'>Washington DC</option>
        <option value='West Virginia'>West Virginia</option>
        <option value='Wisconsin'>Wisconsin</option>
        <option value='Wyoming'>Wyoming</option>
      </select>
      <span>
        <label htmlFor='disaster'>Disaster Type:</label>
        <select id='disaster' name='disaster'>
          <option value='Flood'>Flood</option>
          <option value='Earthquake'>Earthquake</option>
          <option value='severeStorms'>Severe Storm</option>
          <option value='Hurricane'>Hurricane</option>
          <option value='Tornado'>Tornado</option>
          <option value='Freezing'>Freezing</option>
          <option value='Drought'>Drought</option>
          <option value='All'>All</option>
        </select>
        <option value='Alabama'></option>
      </span>
      <span>
        <button onClick={props.handleClick}>Enter</button>
      </span>
    </div>
  );
};

export default Search;
