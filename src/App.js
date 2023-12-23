import './App.css';
import React from 'react'
import { WeatherProvider } from './contex/WeatherContex';
import Search from './components/Search';
import CityWeather from './components/CityWeather';
function App() {
  return (
    <div className="App">
      <WeatherProvider>
        <div>
          <div className="Weather-dashboard">  
            <h1 className="h1header">Weather Dashboard</h1>
            </div>
          <div className="container">
            <Search />
            <div className="weather-data">
            </div>
            <div>
              <CityWeather/>
            </div>
          </div>
        </div>
      </WeatherProvider>

    </div>
  );
}

export default App;
