import React from 'react';
import { useSelector } from 'react-redux';

import GrandSonBox from './GrandSonBox';

const Box = () => {
  let count = useSelector(state => state.count);

  return (
    <div>
      <h1>This is Box : {count}</h1>
      <GrandSonBox />
    </div>
  )
}

export default Box
