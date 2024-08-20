import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate()
  const goToProductPage = () => {
    navigate('/products?q=')
  }
  return (
    <div>
      <h1>Homepage</h1>
      <Link to='/about'>
        <button>Go to About Page</button>
      </Link>
      <button onClick={goToProductPage}>Go to Product Page</button>
    </div>
  )
}

export default Home
