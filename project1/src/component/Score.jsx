import React from 'react'

const Score = (props) => {
  console.log(props.reset)

  return (
    <div className='score-box'>
      <div className='user-score'>{props.user}</div>
      <span>:</span>
      <div className="com-score">{props.computer}</div>
      <button onClick={props.reset} className='reset-btn'>RESET</button>
    </div>
  )
}

export default Score
