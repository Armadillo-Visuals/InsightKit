import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import '../stylesheets/widget.css';


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
    <div className='widget-contents'>
      <h2>{`${state} Carbon Emissions by Year`}</h2>
      <Line
        datasetIdKey='disasters'
        data={{
          datasets: [
            {
              label: 'Carbon Emissions',
              data,
              // borderColor: '#4287f5',
              backgroundColor: '#4287f5',
            },
          ],
        }}
        // width={'100%'}
        // options={{
        //   responsive: true,
        //   maintainAspectRatio: false
        // }}
      />
    </div>
  );
};

export default CarbonOverTime;