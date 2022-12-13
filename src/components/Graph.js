import React from 'react';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';

const Graph = ({ graphData, disaster, state }) => {
  // let carbon;
  // if (graphData) {
  //   carbon = graphData.carbon.reduce((acc, curr) => {
  //     acc[curr.Year] = curr[state];
  //     return acc;
  //   }, {});
  // }
  const carbon = graphData.carbon.reduce((acc, curr) => {
    acc[curr.Year] = curr[state];
    return acc;
  }, {});
  return (
    <div className='graph' id='mydiv'>
      <h2>Carbon Emissions vs Disasters by Year</h2>
      <Line
        datasetIdKey='disasters'
        data={{
          datasets: [
            {
              label: 'Carbon Emissions',
              yAxisID: 'emissions',
              data: carbon,
              borderColor: '#4287f5',
              backgroundColor: '#4287f5',
            },
            {
              label: `${disaster}`,
              yAxisID: 'occurences',
              data: graphData?.data || null,
              borderColor: '#f26b6b',
              backgroundColor: '#f26b6b',
            },
          ],
        }}
        options={{
          scales: {
            occurences: {
              title: {
                display: true,
                text: `${disaster === 'All' ? 'Disasters' : disaster + 's'} per year`,
              },
              type: 'linear',
              position: 'left',
            },
            emissions: {
              title: {
                display: true,
                text: 'Carbon Emissions (million metric tons of CO2)',
              },
              type: 'linear',
              position: 'right',
            },
          },
        }}
      />
    </div>
  );
};

export default Graph;
