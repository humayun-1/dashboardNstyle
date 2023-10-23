import React, { useEffect, useState } from 'react'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const data = [
    {
      name: 'JAN',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'FEB',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'MAR',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'APR',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'MAY',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'JUNE',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'JULY',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  
const Chart = () => {
    const [chartWidth, setChartWidth] = useState(900); // Set an initial width value

  // Use useEffect to get the window width and update chartWidth
  useEffect(() => {
    function handleResize() {
      setChartWidth(window?.innerWidth > 600 ? window?.innerWidth - 100 : 600);
    }

    // Attach the event listener when the component mounts
    window.addEventListener('resize', handleResize);

    // Call the event listener function to set the initial width
    handleResize();

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className='w-full md:overflow-hidden overflow-x-scroll'>
        <BarChart
          width={chartWidth}
          height={500}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#5679FF" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          <Bar dataKey="uv" fill="#000" activeBar={<Rectangle fill="gold" stroke="purple" />} />
        </BarChart>
    </div>
  )
}

export default Chart