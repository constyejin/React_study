import React from 'react';
import { Button } from 'react-bootstrap';

const WeatherBtn = ({cities, setCity}) => {
  return (
    <div className='weather-btn-box'>
      <Button variant="secondary">Current Location</Button>
      
      {
        cities.map((item, index) => (
          <Button 
            variant="light" 
            key={index}  
            onClick={() => {setCity(item)}}>
            {item}
          </Button>
        ))
      }
    </div>
  )
}

export default WeatherBtn
