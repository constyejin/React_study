import React, { Component } from 'react';

class ScoreClass extends Component {
  render() {
    const {userScore, comScore} = this.props.score;

    return (
      <div className='score-box'>
        <div className='user-score'>{userScore}</div>
        <span>:</span>
        <div className="com-score">{comScore}</div>
        <button onClick={this.props.reset} className='reset-btn'>RESET</button>
      </div>
    );
  }
}

export default ScoreClass;
