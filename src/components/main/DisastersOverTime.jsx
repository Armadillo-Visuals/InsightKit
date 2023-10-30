/**
 * **************************************************
 *
 * @description
 * This component renders the line chart for disasters
 * over time
 *
 * **************************************************
 */

import { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

const DisastersOverTime = ({ disaster, state }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/data/disasters-over-time/${state}/${disaster}`,
        );
        setData(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, []);

  return (
    <div className='w-full h-full flex flex-col items-center justify-center text-[var(--darkgreen)]'>
      {' '}
      <h2>{`${state} ${disaster === 'All' ? 'All' : disaster + 's'} by Year`}</h2>
      <Line
        datasetIdKey='disasters'
        data={{
          datasets: [
            {
              label: `${disaster}`,
              data,
              borderColor: '#f26b6b',
              backgroundColor: '#f26b6b',
            },
          ],
        }}
      />
    </div>
  );
};

export default DisastersOverTime;
