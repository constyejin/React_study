import React from 'react'

const Score = (props) => {
  return (
    <div className='score-box'>
      {/* <h3>TIMER</h3> */}
      <div className='user-score'>{props.score.userScore}</div>
      <span>:</span>
      <div className="com-score">{props.score.comScore}</div>
      <button onClick={props.reset} className='reset-btn'>RESET</button>
    </div>
  )
}

export default Score
