import Header from './components/Header';
import Cards from './components/Card';
import Footer from './components/Footer';
import { data } from './data';

import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      {
        data.map((item) => {
          return <Cards key={item.id} item={item} />
        })
      }
      <Footer />
    </div>
  );
}

export default App;