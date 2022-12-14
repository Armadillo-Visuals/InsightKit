import React from 'react';
import Chart from 'chart.js/auto';
import { Pie } from 'react-chartjs-2';

// const typeData = {
//   Fires: 100,
//   Storms: 50,
//   Earthquakes: 1,
//   Hurricanes: 5,
//   Freezing: 10,
// };

const PieChart = ({ typeData }) => {
  console.log(typeData);

  const labels = [];
  const data = [];
  if (typeData) {
    for (const disasterType in typeData) {
      labels.push(disasterType);
      data.push(typeData[disasterType]);
    }
  }

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
    <Pie
      className='pie'
      datasetIdKey='byType'
      data={{
        labels,
        datasets: [
          {
            label: 'Disaster Types',
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
            data: data,
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
      }}
    />
  );
};

export default PieChart;
