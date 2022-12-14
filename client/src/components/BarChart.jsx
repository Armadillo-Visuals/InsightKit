import React from 'react';
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

const fires = {
  1970: 5,
  1971: 10,
  1972: 12,
  1973: 5,
  1978: 1,
};

const hurricanes = {
  1971: 1,
  1975: 2,
};

const earthquakes = {
  1970: 7,
  1973: 8,
  1974: 5,
  1975: 6,
  1977: 9,
  1978: 10,
};

const BarChart = () => {
  return (
    <Bar
      datasetIdKey='byTypebyYear'
      data={{
        datasets: [
          {
            label: 'fires',
            data: fires,
          },
          {
            label: 'hurricanes',
            data: hurricanes,
          },
          {
            label: 'earthquakes',
            data: earthquakes,
          },
        ],
      }}
      options={{
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true,
          },
        },
      }}
    />
  );
};

export default BarChart;
