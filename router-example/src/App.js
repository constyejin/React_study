import { useState } from 'react';
import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import Home from './page/Home';
import About from './page/About';
import Products from './page/Products';
import ProductDetail from './page/ProductDetail';
import Login from './page/Login';
import User from './page/User';

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  const PrivateRoute = () => {
    return authenticate == true ? <User /> : <Navigate to='/login' />
  }

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/products/:id' element={<ProductDetail/>} /> 
        <Route path='/login' element={<Login/>} />
        <Route path='/user' element={<PrivateRoute/>} />
      </Routes>
    </div>
  );
}

export default App;
