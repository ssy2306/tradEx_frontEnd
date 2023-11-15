import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto';
const CryptoChartComponent = ({ cryptoChartData, chartRef }) => {
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
            label: 'Price',
            data: dataValues,
            fill: false,
            borderColor: 'rgba(255,255,255,255)',
            tension: 0.1,
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
      <h2>Crypto Price Chart</h2>
      {chartData && <Line data={chartData} options={{
        responsive: true,
        color: 'white'
      }} />}
    </div>
  );
};

export default CryptoChartComponent;
