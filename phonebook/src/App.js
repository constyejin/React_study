import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

import ContactList from './components/ContactList';
import SearchBox from './components/SearchBox';
import ContactForm from './components/ContactForm';
import { useState } from 'react';

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
        modal === true ? <ContactForm /> : null
      }
    </div>
  );
}

export default App;
