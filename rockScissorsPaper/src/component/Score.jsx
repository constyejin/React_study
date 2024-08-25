import React from 'react' 

const Score = (props) => {
  return (
    <div className='score-box'>
      <div className='score-timer pos-center-y'>
        <p>TIMER : {props.count}</p>

      </div>

      <div className='score-num'>
        <div className='user-score'>{props.score.userScore}</div>
        <span>:</span>
        <div className="com-score">{props.score.comScore}</div>
      </div>

      <button onClick={props.reset} className='reset-btn pos-center-y'>RESET</button>
    </div>
  )
}

export default Score
