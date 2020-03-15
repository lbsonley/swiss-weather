import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { hourlyToUi } from '../assets/js/domain';

function Hourly24({ View }) {
  const [ weather, setWeather ] = useState([]);

  useEffect(() => {
    axios.get(
      'https://api.srgssr.ch/forecasts/v1.0/weather/24hour?latitude=46.559856&longitude=7.892691',
      {
        response: 'json',
        headers: {
          Authorization: 'Bearer 0RsZQ91uhCxPrO30Ka7LI9B6UqI2'
        }
      })
    .then(res => {
      const data = hourlyToUi(res);
      console.log('hourlyToUi', data);
      setWeather(data);
  
    });
  }, []);

  return (<View weather={weather} />);

};

export default Hourly24;
