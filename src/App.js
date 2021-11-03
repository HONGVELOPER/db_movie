import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Movie from './pages/Movie';

function App() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/movie" component={Movie} />
    </div>
  )
}

export default App;
