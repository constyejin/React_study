import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  const increase = () => {
    // 반드시 type이라는 키가 있어야 한다. (payload는 선택사항)
    // type => 액셕의 이름
    dispatch({type: 'INCREMENT'});
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>증가</button>
    </div>
  );
}

export default App;
