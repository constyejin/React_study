import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

import Header from './components/Header';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

function App() {
  const [modal, setModal] = useState(false);

  return (
    <div className='wrapper'>
      <Header setModal={setModal}/>
      <Routes>
        <Route path='/' element={ <ContactList />} />
      </Routes>
      {
        modal === true ? <ContactForm setModal={setModal} /> : null
      }
    </div>
  );
}

export default App;
