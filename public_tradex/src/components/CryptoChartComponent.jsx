import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto';
import { Box } from '@mui/system';
const CryptoChartComponent = ({ cryptoChartData, chartRef, bg }) => {
  console.log("bgcolor",bg);
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    if (cryptoChartData && cryptoChartData.prices) {
      const labels = cryptoChartData.prices.map((data) => new Date(data[0]).toLocaleTimeString());
      const dataValues = cryptoChartData.prices.map((data) => data[1]);


      // Chart.js data configuration
      const newChartData = {
        labels: labels,
        datasets: [
          {
            label: 'Price in INR',
            data: dataValues,
            fill: false,
            borderColor: bg,
            tension: 0.1,
            borderWidth: 1,
            color: bg
          },
        ],
      };

      setChartData(newChartData);

      // Cleanup function to destroy the chart when the component is unmounted
      return () => {
        // Check if the chart exists before trying to destroy it
        if (chartRef.current) {
          chartRef.current.destroy();
        }
      };
    }
  }, [cryptoChartData]);

  return (
    <div>
      {chartData && <Line data={chartData} options={{
        responsive: true,
        backgroundColor: bg,
        scales: {
          x: {
            ticks: {
              color: bg, // Change the x-axis text color to red
            },
          },
          y: {
            ticks: {
              color: bg, // Change the y-axis text color to blue
            },
          },
        },
        plugins: {
          legend: {
            labels: {
              color: bg, // Change the legend label color to green
            },
          },
        },
      }} />}
    </div>
  );
};

export default CryptoChartComponent;
