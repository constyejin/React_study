import React, { Component } from 'react';
import {userEffect} from 'react';
import './App.css';
import BoxClass from './component/BoxClass';
import ScoreClass from './component/ScoreClass';

// 가위, 바위, 보 이미지 import
import rock from './images/rock.png';
import scissors from './images/scissors.png';
import paper from './images/paper.png';

const choice = {
  rock : {
    name : "Rock",
    img : rock,
  },
  scissors: {
    name : "Scissors",
    img : scissors,
  },
  paper : {
    name : "Paper",
    img : paper,
  },
}

class AppClass extends Component {
  constructor(props) {
    super(props)
    const saveScore = JSON.parse(localStorage.getItem('score'))

    this.state = {
      userSelect : null,
      comSelect : null,
      result : "",
      score : saveScore ? saveScore : {userScore : 0, comScore : 0},
    }
  }

  play = (userChoice) => {
    this.setState({userSelect : choice[userChoice]})
    const comChoice = this.randomChoice();
    this.setState({comSelect : comChoice})
    const gameResult = this.judgement(choice[userChoice], comChoice);
    this.setState({result : gameResult})
  
    if(gameResult === "WIN") {
      this.setState(num => ({
        score : {
          ...num.score,
          userScore : num.score.userScore + 1
        }
      }), () => {
        localStorage.setItem('score', JSON.stringify(this.state.score));
      })
    } else {
      this.setState(num => ({
        score : {
          ...num.score,
          comScore : num.score.comScore + 1
        }
      }), () => {
        localStorage.setItem('score', JSON.stringify(this.state.score));
      })
    }


  }

  randomChoice = () => {
    const itemArr = Object.keys(choice);
    const randomItem = Math.floor(Math.random() * itemArr.length);
    return choice[itemArr[randomItem]]
  }

  judgement = (user, computer) => {
    const you = user.name;
    const com = computer.name;
    
    if(you === com) {
      return "TIE";
    } else if(you === "Scissors") {
      return com === "Paper" ? "WIN" : "LOSE";
    } else if(you === "Rock") {
      return com === "Scissors" ? "WIN" : "LOSE";
    } else if(you === "Paper") {
      return com === "Rock" ? "WIN" : "LOSE";
    }
  }

  reset = () => {
    this.setState({
      score : { userScore : 0, comScore : 0}
    }, () => {
      localStorage.setItem('score', JSON.stringify(this.state.score))
    });
    this.setState({userSelect : null});
    this.setState({comSelect : null});
    this.setState({result : ""});
  }
  
  render() {
    return (
      <div className='wrapper'>
        <ScoreClass score={this.state.score} reset={this.reset}/>

        <div className="main-box">
          <BoxClass title="YOU" item={this.state.userSelect} result={this.state.result}/>
          <BoxClass title="COMPUTER" item={this.state.comSelect} result={this.state.result}/>
        </div>

        <div className="choice-btn">
          <button onClick={() => this.play('scissors')}>
            <img src={choice.scissors.img} alt="scissors" />
          </button>
          <button onClick={() => this.play('rock')}>
            <img src={choice.rock.img} alt="rock" />
          </button>
          <button onClick={() => this.play('paper')}>
            <img src={choice.paper.img} alt="paper" />
          </button>
        </div>
      </div>
    );
  }
}

export default AppClass;
