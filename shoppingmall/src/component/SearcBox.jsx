import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearcBox = () => {
  return (
    <div className='search'>
      <div className='search-box'>
        <FontAwesomeIcon icon={faSearch}/>
        <input type="text"  placeholder='Search'/>
      </div>
    </div>

  )
}

export default SearcBox
