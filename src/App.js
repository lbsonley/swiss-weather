import React from 'react';
import './App.css';
import Hourly24 from './providers/hourly24';
import Day from './pages/day';

function App() {
  return (
    <Hourly24 View={Day}/>  
  );
}

export default App;
