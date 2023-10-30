/**
 * **************************************************
 *
 * @description
 * This component renders the line chart for carbon
 * over time
 *
 * **************************************************
 */

import { useState, useEffect } from 'react';
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
    <div className='w-full h-full flex flex-col items-center justify-center text-[var(--darkgreen)]'>
      <h2>{`${state} Carbon Emissions by Year`}</h2>
      <Line
        datasetIdKey='disasters'
        data={{
          datasets: [
            {
              label: 'Carbon Emissions',
              data,
              backgroundColor: '#4287f5',
            },
          ],
        }}
      />
    </div>
  );
};

export default CarbonOverTime;
