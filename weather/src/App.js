import { useState, useEffect, CSSProperties } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import WeatherBox from './component/WeatherBox';
import WeatherBtn from './component/WeatherBtn';
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(true);

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
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setLoading(false);
  }

  const getWeatherByCity = async() => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setLoading(false)
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
      {
        loading ? (
          <div>
            <ClipLoader
            className='loading-spinner'
            color="#555"
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
            />
          </div>
        ) : (
        <div>
          <WeatherBox weather={weather} />
          <WeatherBtn cities={cities} setCity={setCity} />
        </div>
        ) 
      }
    </div>
  );
}

export default App;
