import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const SearcBox = () => {
  const navigate = useNavigate();
  const search = (e) => {
    if(e.key === 'Enter') {
      let keyword = e.target.value;
      navigate(`/shop/?q=${keyword}`);
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
