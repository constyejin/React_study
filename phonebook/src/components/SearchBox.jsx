import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchBox = () => {
  let [keyword, setKeyword] = useState('');
  let dispatch = useDispatch();
  // let { contact } = useSelector((state) => state);

  const searchbyName = (e) => {
    if(e.key === 'Enter') {
      dispatch({ type: 'SEARCH_BY_USERNAME', payload: {keyword} })
    }
  }
  return (
    <div className='search-box'>
      <input onKeyPress={searchbyName} onChange={e => setKeyword(e.target.value)} type="text" placeholder='이름으로 검색하세요' />
      <FontAwesomeIcon className='search-icon' icon={faSearch} />
    </div>
  )
}

export default SearchBox
