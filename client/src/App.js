import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState('Initial Data');
  const a = 1+2;
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://linserv1.cims.nyu.edu:21979/api/data');
        const result = await response.json();
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        setData(result.message);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [data]);

  return (
    <div className="App">
      <h1>{data}</h1>
      <h3>{a}</h3>
    </div>
  );
}

export default App;
