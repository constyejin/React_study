import './App.scss';
import { Routes, Route } from 'react-router-dom';

import Navbar from './component/Navbar';
import Home from './component/Home';
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import ProductDetail from './page/ProductDetail';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<ProductAll/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/product/:id' element={<ProductDetail/>} />
      </Routes>
    </div>
  );
}

export default App;
