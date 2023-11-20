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

      const gradient = {
        canvas: null,
        context: null,
      };

      // Chart.js data configuration
      const newChartData = {
        labels: labels,
        datasets: [
          {
            label: 'Price in INR',
            data: dataValues,
            backgroundColor: (ctx) => {
              // Create a linear gradient
              gradient.canvas = ctx.canvas;
              gradient.context = ctx.chart.ctx.createLinearGradient(0, 0, 0, ctx.chart.height);
              gradient.context.addColorStop(0, bg);  // Start color
              gradient.context.addColorStop(0.5, 'rgba(0,0, 0, 0.5)');  // Start color
              gradient.context.addColorStop(1, "rgba(0, 0, 0, 0.01)");  // End color
              return gradient.context;
            },
            borderColor: bg,
            tension:0.2,
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
    <Box sx={{
      bgcolor: 'none',
      borderRadius: 2,
      padding: 2
    }}>
      {chartData && <Line data={chartData} options={{
         responsive: true, // Disable responsive
         maintainAspectRatio: true, 
        backgroundColor: bg,
        scales: {
          x: {
            // display: false,   
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
    </Box>
  );
};

export default CryptoChartComponent;
