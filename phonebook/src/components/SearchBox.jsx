import React from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchBox = () => {
  return (
    <div className='search-box'>
      <input type="text" placeholder='Search here' />
      <FontAwesomeIcon className='search-icon' icon={faSearch} />
    </div>
  )
}

export default SearchBox
