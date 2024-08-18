import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const WeatherBtn = ({cities, setCity}) => {
  return (
    <div className='weather-btn-box'>
      <Button 
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
