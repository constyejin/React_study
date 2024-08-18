import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const WeatherBtn = ({cities, setCity, weatherBtnActive}) => {
  console.log(weatherBtnActive == '');
  return (
    <div className='weather-btn-box'>
      <Button 
        className={weatherBtnActive == '' ? 'active' : ''}
        variant="light" 
        onClick={() => setCity('')}>Current Location</Button>
      
      {cities.map((item, index) => (
        <Button 
          variant="light" 
          key={index}  
          onClick={() => setCity(item)}>
          {item.charAt(0).toUpperCase() + item.slice(1)}
        </Button>
        ))}
    </div>
  ) 
}

export default WeatherBtn
