import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import api from '../services/api';

const Dashboard = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    fetchChartData();
  }, []);

  const fetchChartData = async () => {
    const response = await api.get('/chart-data');
    setChartData(response.data);
  };

  return (
    <div>
      <Line data={chartData} />
      {/* Add more charts and visualizations as needed */}
    </div>
  );
};

export default Dashboard;
