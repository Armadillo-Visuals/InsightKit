import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';
import { Pie } from 'react-chartjs-2';
import axios from 'axios';

const DisasterPieChart = ({ state }) => {
  const [data, setData] = useState(null);
  const [labels, setLabels] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/data/disasters-all-time/${state}`);
        setData(Object.values(response.data));
        setLabels(Object.keys(response.data));
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, []);

  // Append '4d' to the colors (alpha channel), except for the hovered index
  function handleHover(evt, item, legend) {
    legend.chart.data.datasets[0].backgroundColor.forEach((color, index, colors) => {
      colors[index] = index === item.index || color.length === 9 ? color : color + '4D';
    });
    legend.chart.update();
  }

  // Removes the alpha channel from background colors
  function handleLeave(evt, item, legend) {
    legend.chart.data.datasets[0].backgroundColor.forEach((color, index, colors) => {
      colors[index] = color.length === 9 ? color.slice(0, -2) : color;
    });
    legend.chart.update();
  }

  return (
    <div className='widget-contents'>
      <h2>{`Disasters in ${state}`}</h2>
      <Pie
        className='pie'
        datasetIdKey='byType'
        data={{
          labels,
          datasets: [
            {
              label: 'Disaster Types',
              data,
              backgroundColor: [
                '#3e95cd',
                '#8e5ea2',
                '#3cba9f',
                '#e8c3b9',
                '#c45850',
                '#f2bf77',
                '#eb91e9',
                '#9fde92',
              ],
            },
          ],
        }}
        options={{
          plugins: {
            legend: {
              onHover: handleHover,
              onLeave: handleLeave,
            },
          },
          elements: {
            arc: {
              borderWidth: 0,
            },
          },
          // responsive: true,
          // maintainAspectRatio: false
        }}
        // width={'100%'}
      />
    </div>
  );
};

export default DisasterPieChart;
