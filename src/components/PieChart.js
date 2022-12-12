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

  return (
    <Pie
      datasetIdKey='byType'
      data={{
        labels,
        datasets: [
          {
            label: 'Disaster Types',
            backgroundColor: ['#3e95cd', '#8e5ea2', '#3cba9f', '#e8c3b9', '#c45850', '#f2bf77', '#eb91e9', '#9fde92'],
            data: data,
          },
        ]
      }}
    />
  );
};

export default PieChart;
