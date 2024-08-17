import { useState, useEffect } from 'react';
import './App.css';
import WeatherBox from './component/WeatherBox';


function App() {
  const [weather, setWeather] = useState(null);

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      let lat = pos.coords.latitude;
      let lon = pos.coords.longitude;
      const apiKey = 'ac49f1f2f69b987a0820eddf6f88027f';
      getWeatherByCurrentLocation(lat, lon, apiKey);
    })
  }

  const getWeatherByCurrentLocation = async(lat, lon, apiKey) => {
    // units=metric
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data)
  }

  useEffect(() => {
    getCurrentLocation();
  }, [])

  return (
    <div className='wrapper cloudy'>
      <WeatherBox weather={weather} />
    </div>
  );
}

export default App;
