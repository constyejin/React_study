import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';

import Box from './components/Box';

function App() {
  let count = useSelector(state => state.count);
  let id = useSelector(state => state.id);
  let pw = useSelector(state => state.pw);
  console.log(count)

  const dispatch = useDispatch();

  const increase = () => {
    // 반드시 type이라는 키가 있어야 한다. (payload는 선택사항)
    // type => 액셕의 이름
    dispatch({type: 'INCREMENT', payload: {num: 10}});
  }

  const decrease = () => {
    if(count > 0) {
      dispatch({type: 'DECREMENT'})
    }
  }

  const login = () => {
    dispatch({type: 'LOGIN', payload: { id: 'yejin', pw: 'hehehe' } });
  }

  return (
    <div className='wrapper'>
      {/* <h1>{id}, {pw}</h1>
      <button onClick={login}>Login</button> */}
      <div className='game-box'>
        <div>
          <h1 className='count'>{count}</h1>
          <button onClick={increase} className='btn plus-btn'></button>
          <button onClick={decrease} className='btn minus-btn'></button>
        </div>
      </div>
      {/* <Box /> */}
    </div>
  );
}

export default App;
