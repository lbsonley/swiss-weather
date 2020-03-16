import React from 'react';
import './App.css';
import Hourly24 from './providers/hourly24';
import Day from './pages/day';
import locations from './assets/js/locations';

function App() {
  return (
    <Hourly24
      loc={locations.lenzburg}
      View={Day}
    />  
  );
}

export default App;
