import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Homepage from './components/Homepage';
import ReactQueryPage from './components/ReactQueryPage'

function App() {
  return (
    <div>
      <nav>
        <Link to='/'>Homepage</Link>
        <Link to='/react-query'>ReactQuery</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/react-query' element={<ReactQueryPage />} />
      </Routes>
    </div>
  );
}

export default App;
