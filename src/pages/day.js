import React from 'react';
import { getHours } from '../assets/js/datetime';
import japan from '../assets/images/japan.svg';

function Day({ weather }) {
  const symbols = require.context('../assets/images/symbols', false)

  return (
    <article className="bg bg-dark">
      <section className="weather-animation">
        <p>
          Today's Weather in: <strong>Mürren</strong>
        </p>
        <div class="weather-scene">
          <img className="weather-bg" src={japan} alt="mountain scene" />
          <div className="weather-pattern">
            {Object.keys(weather).map(hour => (
              <div className="weather-item">
                <img src={symbols(`./${weather[hour].symbol.value}.png`)}   className="weather-symbol" alt="logo" />
                <div className="weather-info">
                  <p>{getHours(hour)}</p>
                  <p>{`${weather[hour].temperature_2m_act.value} ${weather[hour].temperature_2m_act.unit}`}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <footer>

          <a
            className="App-link"
            href="#"
          >
            See Details
          </a>
        </footer>
      </section>
    </article>
  );
}

export default Day;
