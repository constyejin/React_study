import React from 'react';
import { Button } from 'react-bootstrap';

const WeatherBtn = ({cities}) => {
  return (
    <div className='weather-btn-box'>
      <Button variant="outline-dark">Current Location</Button>
      
      {
        cities.map((item) => {
          return <Button variant="outline-dark">{item}</Button>
        })
      }
    </div>
  )
}

export default WeatherBtn
