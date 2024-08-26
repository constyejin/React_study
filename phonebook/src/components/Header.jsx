import React from 'react'
import SearchBox from './SearchBox';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

const Header = ({ setModal }) => {
  return (
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
  )
}

export default Header
