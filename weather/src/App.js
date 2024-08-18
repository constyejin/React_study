import { useState, useEffect } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import WeatherBox from './component/WeatherBox';
import WeatherBtn from './component/WeatherBtn';

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('');

  const apiKey = 'ac49f1f2f69b987a0820eddf6f88027f';
  const cities = ['seoul', 'paris', 'london'];

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      let lat = pos.coords.latitude;
      let lon = pos.coords.longitude;
      getWeatherByCurrentLocation(lat, lon, apiKey);
    })
  }

  const getWeatherByCurrentLocation = async(lat, lon, apiKey) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data)
  }

  const getWeatherByCity = async() => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data)
  }

  useEffect(() => {
    if(city == '') {
      getCurrentLocation();
    } else {
      getWeatherByCity()
    }
  }, [city])

  let weatherTxt = weather?.weather[0].main.toLowerCase();

  return (
    <div className={`wrapper ${weatherTxt}`}>
      <div>
        <WeatherBox weather={weather} />
        <WeatherBtn cities={cities} setCity={setCity}/>
      </div>
    </div>
  );
}

export default App;
