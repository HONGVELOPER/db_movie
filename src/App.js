import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import axios from 'axios';

function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/reserve/list')
        if (response.status === 200) {
          console.log(response)
        }
        const response2 = await axios.get('/api/commute/attend')
        if (response.status === 200) {
          console.log(response2)
        }
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
