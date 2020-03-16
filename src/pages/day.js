import React from 'react';
import { getHours } from '../assets/js/datetime';
import japan from '../assets/images/japan.svg';

function Day({ weather }) {
  const symbols = require.context('../assets/images/symbols', false);
  console.log(weather);

  return (
    <article className="bg bg-dark">
      <section className="weather-animation">
        <p>
          Weather in: <strong>{weather.name}</strong><br/>on: <strong>{weather.date}</strong>
        </p>
        <div className="weather-scene">
          <img className="weather-bg" src={japan} alt="mountain scene" />
          <div className="weather-pattern">
            {weather.forecasts.map(hour => (
              <div
                key={`${weather.name}${hour.date}`}
                className="weather-item"
              >
                <img src={symbols(`./${hour.symbol.value}.png`)}   className="weather-symbol" alt="logo" />
                <div className="weather-info">
                  <p>{getHours(hour.date)}</p>
                  <p>{`${hour.temperature_2m_act.label}: ${hour.temperature_2m_act.value} ${hour.temperature_2m_act.unit}`}</p>
                  <p>{`${hour['precipitation_1.5m_sum_3h'].label}: ${hour['precipitation_1.5m_sum_3h'].value} ${hour['precipitation_1.5m_sum_3h'].unit}`}</p>
                  <p>{`${hour.windspeed_10m_mean_1h.label}: ${hour.windspeed_10m_mean_1h.value} ${hour.windspeed_10m_mean_1h.unit}`}</p>
                  <p>{`${hour.windspeed_10m_max_3h.label}: ${hour.windspeed_10m_max_3h.value} ${hour.windspeed_10m_max_3h.unit}`}</p>
                  <p>{`${hour.winddirection_10m_mean_1d.label}: ${hour.winddirection_10m_mean_1d.value} ${hour.winddirection_10m_mean_1d.unit}`}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}

export default Day;
