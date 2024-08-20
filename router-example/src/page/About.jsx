import React from 'react';
import { useNavigate } from 'react-router-dom';

// 함수 안에서 사용해야 할 경우 => useNavigate();
const About = () => {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate('/');
  }
  return (
    <div>
      <h1>About Page</h1>
      <button onClick={goToHomePage}>Go to Homepage!</button>
    </div>
  )
}

export default About
