import React from 'react';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';

const Graph = ({ graphData, disaster, state }) => {
  let carbon;
  if (graphData) {
    carbon = graphData.carbon.reduce((acc, curr) => {
      acc[curr.Year] = curr[state];
      return acc;
    }, {});
  }
  return (
    <Line
      datasetIdKey='disasters'
      data={{
        datasets: [
          {
            label: 'carbon emissions',
            yAxisID: 'emissions',
            data: carbon || null,
            borderColor: 'blue',
          },
          {
            label: `${disaster}`,
            yAxisID: 'occurences',
            data: graphData?.data || null,
            borderColor: 'red',
          },
        ],
      }}
      options={{
        scales: {
          occurences: {
            title: {
              display: true,
              text: `${disaster}s per year`,
            },
            type: 'linear',
            position: 'left',
          },
          emissions: {
            title: {
              display: true,
              text: 'carbon emissions',
            },
            type: 'linear',
            position: 'right',
          },
        },
      }}
    />
  );
};

export default Graph;
