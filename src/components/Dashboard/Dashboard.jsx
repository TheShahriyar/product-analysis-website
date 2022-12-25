import React, { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(()=> {
    fetch('data.json')
    .then(res => res.json())
    .then(data => setChartData(data))
  },[]);


  return (
    <div className='container mx-auto py-20'>
      <h2 className='font-bold text-center text-4xl mb-10'>Few Charts</h2>

      <div className='flex'>
        <div className='w-1/2'>
          <LineChart
            height={500}
            width={500}
            data={chartData}
          >
            <CartesianGrid strokeDasharray="2 2" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="investment" stroke="#8884d8"  />
            <Line type="monotone" dataKey="sell" stroke="blue" />
            <Line type="monotone" dataKey="revenue" stroke="#f00" />
            <Legend />
          </LineChart>
        </div>
        <div className='w-1/2'>
          <BarChart
            width={500}
            height={500}
            data={chartData}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="investment" fill="red" />
            <Bar dataKey="sell" fill="green" />
            <Bar dataKey="revenue" fill="#000" />
            <Legend />
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;