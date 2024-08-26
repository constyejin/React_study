import { useState } from 'react';
import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

import SearchBox from './components/SearchBox';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

function App() {
  const [modal, setModal] = useState(false);

  return (
    <div className='wrapper'>
      <header>
        <h1 className='title'>Contacts</h1>
        
        <div className='main-right'>
          <SearchBox />
          <button onClick={() => setModal(true)} className='contact-add-btn'>
            <FontAwesomeIcon icon={faUserPlus} />
            <span className='sm-hidden'>New Contacts</span>
          </button>
        </div>
      </header>
      
      <ContactList />
      {
        modal === true ? <ContactForm setModal={setModal} /> : null
      }
    </div>
  );
}

export default App;
