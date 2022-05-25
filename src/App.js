import React, {useState} from 'react';
import axios from 'axios';

function App() {

  // const url = `https://api.openweathermap.org/data/2.5/weather?q=Vancouver&appid=f058eff10194c73e7eecd2f9440b6a93`

  return (
    <div className="app">
      <div className="container">

        <div className="top">
          <div className="location">
            <p>Vancouver</p>
          </div>
          <div className="temp">
            <h1>15°C</h1>
          </div>
          <div className="description">
            <p>Cloudy</p>
          </div>
        </div>

        <div className="bottom">
          <div className="feels">
            <p>16°C</p>
          </div>
          <div className="humidity">
            <p>20°C</p>
          </div>
          <div className="wind">
            <p>5 MPH</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;