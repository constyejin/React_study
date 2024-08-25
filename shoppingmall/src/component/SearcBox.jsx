import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearcBox = () => {
  const search = (e) => {
    if(e.key === 'Enter') {
      let keyword = e.target.value;
    }
  }

  return (
    <div className='search'>
      <div className='search-box'>
        <FontAwesomeIcon icon={faSearch}/>
        <input onKeyPress={search} type="text" placeholder='Search'/>
      </div>
    </div>

  )
}

export default SearcBox
