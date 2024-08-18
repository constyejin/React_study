import React, { useEffect, useState } from 'react';
import Clock from 'react-live-clock';

// Clear, Clouds, Rain
const WeatherBox = ({weather}) => {
  // 켈빈(Kelvin), ℃ 섭씨(Celsius), ℉ 화씨(Fahrenheit)
  const fah = weather && ((weather.main.temp * 9 / 5) + 32).toFixed(2);
  
  return (
    <div className='weather-main-box'>
      <div className='box'>
        <h1 className='city-name'>{weather?.name.toUpperCase()}
          <p className='city-clock'>
            <Clock format={'HH:mm:ss'} ticking={true} timezone={''}/>
          </p>
        </h1>
        <div className='weather-icon'></div>

        <div className='temp'>
          <p>{weather?.main.temp} ℃</p>
          <span>|</span>
          <p>{fah} ℉</p>
        </div>

        <div className='weather-txt'>
          {weather?.weather[0].main}
        </div>
      </div>

      <div className='box'>
        <div className='humid'>
          <p>{weather?.main.humidity}%</p>
          <p>Humidity</p>
        </div>
        <div className='wind'>
          <p>{weather?.wind.speed}</p>
          <p>Wind-Speed</p>
        </div>
      </div>
    </div>
  )
}

export default WeatherBox
