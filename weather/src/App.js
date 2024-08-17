import { useState, useEffect } from 'react';
import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSun, faCloud, faUmbrella} from "@fortawesome/free-solid-svg-icons";


function App() {
  const [name, setName] = useState('');
  const [cel, setCel] = useState(0);
  const [fah, setFah] = useState(0);
  const [weather, setWeather] = useState('');
  const [humid, setHumid] = useState('');
  const [wind, setWind] = useState('');

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      let lat = pos.coords.latitude;
      let lon = pos.coords.longitude;
      const apiKey = 'ac49f1f2f69b987a0820eddf6f88027f';
      getWeatherByCurrentLocation(lat, lon, apiKey);
    })
  }

  const getWeatherByCurrentLocation = async(lat, lon, apiKey) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    let response = await fetch(url);
    let data = await response.json();

    let name = data.name.toUpperCase();
    setName(name);

    // 켈빈(Kelvin), ℃ 섭씨(Celsius), ℉ 화씨(Fahrenheit)
    let kel = data.main.temp;
    let cel = (kel - 273.15).toFixed(2);
    let fah = ((kel - 273.15) * 9 / 5 + 32).toFixed(2);
    setCel(cel);
    setFah(fah);

    let weather = data.weather[0].description.toUpperCase();
    setWeather(weather);

    let humidity = data.main.humidity;
    setHumid(humidity);

    let windSpeed = data.wind.speed;
    setWind(windSpeed);
  }

  useEffect(() => {
    getCurrentLocation();
  }, [])

  return (
    <div className='wrapper cloudy'>
      <div>
        <div className='box'>
          <h1>{name}</h1>
          <div className='weather-icon'>
            <FontAwesomeIcon icon={faCloud} />
          </div>
          <div className='temp'>
            <p>{cel} ℃</p>
            <span>|</span>
            <p>{fah} ℉</p>
          </div>
          <div className='weather-txt'>{weather}</div>
        </div>
        <div className='box'>
          <div className='humid'>
            <p>{humid}%</p>
            <p>Humidity</p>
          </div>
          <div className='wind'>
            <p>{wind}</p>
            <p>Wind-Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
