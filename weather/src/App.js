import { useState, useEffect, CSSProperties } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import WeatherBox from './component/WeatherBox';
import WeatherBtn from './component/WeatherBtn';
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [apiError, setApiError] = useState('');

  const API_KEY = process.env.REACT_APP_API_KEY;
  const cities = ['seoul', 'paris', 'london'];

  const getWeatherByCurrentLocation = async(lat, lon) => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
      let response = await fetch(url);
      let data = await response.json();

      setWeather(data);
      setLoading(false);
    } catch(err) {
      console.log(err);
      setApiError(err.message);
      setLoading(false);
    }
  }

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      // let lat = pos.coords.latitude;
      // let lon = pos.coords.longitude;
      const {latitude, longitude} = pos.coords;
      getWeatherByCurrentLocation(latitude, longitude);
    })
  }

  const getWeatherByCity = async() => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      let response = await fetch(url);
      let data = await response.json();
      
      setWeather(data);
      setLoading(false)
    } catch(err) {
      console.log(err);
      setApiError(err.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    if(city == '') {
      setLoading(true);
      getCurrentLocation();
    } else {
      setLoading(true);
      getWeatherByCity();
    }
  }, [city])

  let weatherTxt = weather?.weather[0].main.toLowerCase();

  return (
    <div className={`wrapper ${weatherTxt}`}>
      {loading ? (
        <div>
          <ClipLoader
          className='loading-spinner'
          color="#eee"
          loading={loading}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
          />
        </div>
        ) : !apiError ? (
          <div>
            <WeatherBox weather={weather} />
            <WeatherBtn cities={cities} setCity={setCity} city={city}/>
          </div>
        ) : (
          apiError
        )}
    </div>
  );
}

export default App;
