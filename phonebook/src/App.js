import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

import ContactList from './components/ContactList';
import SearchBox from './components/SearchBox';

function App() {
  return (
    <div className='wrapper'>
      <header>
        <h1 className='title'>Contacts</h1>
        {/* <ContactList /> */}
        <div className='main-right'>
          <SearchBox />
          <button className='contact-add-btn'>
            <FontAwesomeIcon icon={faUserPlus} />
            New Contacts
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
