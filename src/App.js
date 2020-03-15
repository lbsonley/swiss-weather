import React from 'react';
import japan from './assets/images/japan.svg';
import './App.css';

function App() {
  const basePath = './assets/images/symbols/';
  const symbolNum = '-24.png';
  const lightSnowPartlySunny = '6.png';

  return (
    <article className="bg bg-dark">
      <section className="weather-animation">
        <p>
          Today's Weather is: <strong>Heavy Snow</strong>
        </p>
        <div class="weather-scene">
          <img className="weather-bg" src={japan} alt="mountain scene" />
          <div class="weather-pattern">
            <img src={require(`${basePath}${symbolNum}`)} className="weather-symbol" alt="logo" />
            <img src={require(`${basePath}${lightSnowPartlySunny}`)} className="weather-symbol" alt="logo" />
            <img src={require(`${basePath}${symbolNum}`)} className="weather-symbol" alt="logo" />
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

export default App;
