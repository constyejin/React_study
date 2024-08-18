import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const WeatherBtn = ({cities, setCity, city}) => {
  
  return (
    <div className='weather-btn-box'>
      <Button 
        className={city == '' ? 'active' : ''}
        variant="light" 
        onClick={() => setCity('')}>Current Location</Button>
      
      {cities.map((item, index) => (
        <Button 
          className={city == item ? 'active' : ''}
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
