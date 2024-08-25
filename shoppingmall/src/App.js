import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { Routes, Route } from 'react-router-dom';

import Gnb from './component/Gnb';
import Home from './component/Home';
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import PrivateRoute from './route/PrivateRoute';

function App() {
  const [authenticate, setAuthenticate] = useState(false); // true면 로그인

  return (
    <div>
      <Gnb authenticate={authenticate} setAuthenticate={setAuthenticate}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<ProductAll/>} />
      <Route path='/login' element={<Login setAuthenticate={setAuthenticate}/>} />
        <Route path='/product/:id' element={<PrivateRoute authenticate={authenticate}/>} />
      </Routes>
    </div>
  );
}

export default App;
