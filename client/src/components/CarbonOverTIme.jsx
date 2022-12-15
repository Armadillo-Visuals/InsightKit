import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

const CarbonOverTime = ({ state }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/data/carbon-over-time/${state}`);
        const carbon = response.data.reduce((acc, curr) => {
          acc[curr.Year] = curr[state];
          return acc;
        }, {});
        setData(carbon);
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, []);

  return (
    <div className='graph' id='mydiv'>
      <h2>{`${state} Carbon Emissions by Year`}</h2>
      <Line
        datasetIdKey='disasters'
        data={{
          datasets: [
            {
              label: 'Carbon Emissions',
              data,
              borderColor: '#4287f5',
              backgroundColor: '#4287f5',
            },
          ],
        }}
      />
    </div>
  );
};

export default CarbonOverTime;

// const carbon = graphData.carbon.reduce((acc, curr) => {
//   acc[curr.Year] = curr[state];
//   return acc;
// }, {});
// return (
//   <div className='graph' id='mydiv'>
//     <h2>Carbon Emissions vs Disasters by Year</h2>
//     <Line
//       datasetIdKey='disasters'
//       data={{
//         datasets: [
//           {
//             label: 'Carbon Emissions',
//             yAxisID: 'emissions',
//             data: carbon,
//             borderColor: '#4287f5',
//             backgroundColor: '#4287f5',
//           },
//           {
//             label: `${disaster}`,
//             yAxisID: 'occurences',
//             data: graphData?.data || null,
//             borderColor: '#f26b6b',
//             backgroundColor: '#f26b6b',
//           },
//         ],
//       }}
//       options={{
//         scales: {
//           occurences: {
//             title: {
//               display: true,
//               text: `${disaster === 'All' ? 'Disasters' : disaster + 's'} per year`,
//             },
//             type: 'linear',
//             position: 'left',
//           },
//           emissions: {
//             title: {
//               display: true,
//               text: 'Carbon Emissions (million metric tons of CO2)',
//             },
//             type: 'linear',
//             position: 'right',
//           },
//         },
//       }}
//     />
//   </div>
// );
