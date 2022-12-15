import React, { useState, useEffect } from 'react';
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
    <div className='widget-contents'>
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
        // width='100%'
        // options={{ 
        //   responsive: true,
        //   maintainAspectRatio: false
        // }}
      />
    </div>
  );
};

export default DisastersOverTime;
