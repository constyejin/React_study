import React from 'react';
// Clear, Clouds, Rain

const WeatherBox = ({weather}) => {
  console.log(weather)
  // 켈빈(Kelvin), ℃ 섭씨(Celsius), ℉ 화씨(Fahrenheit)
  let fah = ((weather?.main.temp * 9 / 5) + 32).toFixed(2);
  return (
    <div>
      <div className='box'>
        <h1>{weather?.name}</h1>
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
