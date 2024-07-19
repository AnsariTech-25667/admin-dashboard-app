import React from 'react';
import { Card, Text } from '@nextui-org/react'; 
import { Bar, Line, Pie } from 'react-chartjs-2'; 
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, LineElement, PointElement, ArcElement } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Analytics = () => {
  const barData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Monthly Sales',
        data: [120, 150, 180, 220, 300],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }
    ]
  };

  const lineData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Weekly Activity',
        data: [50, 75, 100, 125],
        fill: false,
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        tension: 0.1
      }
    ]
  };

  // Sample data for Pie Chart
  const pieData = {
    labels: ['Direct', 'Referral', 'Organic'],
    datasets: [
      {
        label: 'Traffic Sources',
        data: [40, 25, 35],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)'
        ],
        borderWidth: 1
      }
    ]
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Analytics Overview</h2>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        {/* Bar Chart */}
        <Card style={{ width: '30%' }}>
          <Card.Body>
            <Text h4>Monthly Sales</Text>
            <Bar data={barData} options={{ responsive: true }} />
          </Card.Body>
        </Card>
        
        {/* Line Chart */}
        <Card style={{ width: '30%' }}>
          <Card.Body>
            <Text h4>Weekly Activity</Text>
            <Line data={lineData} options={{ responsive: true }} />
          </Card.Body>
        </Card>
        
        {/* Pie Chart */}
        <Card style={{ width: '30%' }}>
          <Card.Body>
            <Text h4>Traffic Sources</Text>
            <Pie data={pieData} options={{ responsive: true }} />
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;
