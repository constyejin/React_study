import React from 'react';
import { useSelector } from 'react-redux';

const GrandSonBox = () => {
  const count = useSelector(state => state.count);

  return (
    <div>
      <h2>GrandSonBox {count}</h2>
    </div>
  )
}

export default GrandSonBox
