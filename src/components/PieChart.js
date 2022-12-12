import React from 'react';
import Chart from 'chart.js/auto';
import { Pie } from 'react-chartjs-2';

const typeData = {
  Fires: 100,
  Storms: 50,
  Earthquakes: 1,
  Hurricanes: 5,
  Freezing: 10,
};

const labels = [];
const data = [];
for (const disasterType in typeData) {
  labels.push(disasterType);
  data.push(typeData[disasterType]);
}

const PieChart = () => {
  return (
    <Pie
      datasetIdKey='byType'
      data={{
        labels,
        datasets: [
          {
            // label: 'Disaster Types',
            // backgroundColor: ['#3e95cd', '#8e5ea2', '#3cba9f', '#e8c3b9', '#c45850'],
            data: data,
          },
        ],
      }}
    />
  );
};

export default PieChart;
