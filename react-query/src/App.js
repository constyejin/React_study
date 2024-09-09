import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Homepage from './components/Homepage';

function App() {
  return (
    <div>
      <nav>
        <Link to='/'>Homepage</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
