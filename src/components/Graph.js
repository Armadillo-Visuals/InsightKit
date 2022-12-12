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
    <div className='graph' id='mydiv'>
      <h2>Carbon Emissions vs Disasters by Year</h2>
      <Line
        datasetIdKey='disasters'
        data={{
          datasets: [
            {
              label: 'carbon emissions',
              yAxisID: 'emissions',
              data: carbon || null,
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
                text: `${disaster === 'All' ? 'disasters' : disaster + 's'} per year`,
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
    </div>
  );
};

export default Graph;
