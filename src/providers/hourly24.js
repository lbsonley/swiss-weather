import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { hourlyToUi } from '../assets/js/domain';

function Hourly24({ loc, View }) {
  const [ weather, setWeather ] = useState(null);

  const apiUrl24Hour = 'https://api.srgssr.ch/forecasts/v1.0/weather/24hour';
  const query = `?latitude=${loc.lat}&longitude=${loc.lng}`

  useEffect(() => {
    axios.get(
      `${apiUrl24Hour}${query}`,
      {
        response: 'json',
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
        }
      })
    .then(res => {
      const data = hourlyToUi(res);
      console.log('hourlyToUi', data);
      setWeather(data);
    })
    .catch(err => console.log(err));
  }, [loc.lat, loc.lng, query]);

  return (
    weather
      ? <View weather={weather['5600']} />
      : null
  );

};

export default Hourly24;
