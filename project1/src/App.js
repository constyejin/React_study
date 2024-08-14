import { useState, useEffect } from 'react';
import './App.css';
import Score from './component/Score';
import Box from './component/Box';

// 가위, 바위, 보 이미지 import
import rock from './images/rock.png';
import scissors from './images/scissors.png';
import paper from './images/paper.png';


// 1. 박스 2개 (타이틀, 사진, 결과)
// 2. 가위 바위 보 버튼
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보인다.
// 4. 컴퓨터는 랜덤하게 아이템이 선택된다.
// 5. 3,4 결과로 누가 이겼는지 승패를 따진다.
// 6. 승패 결과에 따라 박스 border 색 변경 (win - 초록 | lose - 빨강 | tie - 검정)

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


function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [comSelect, setComSelect] = useState(null);
  const [result, setResult] = useState("");
  const [score, setScore] = useState(() => {
    return !JSON.parse(localStorage.getItem('score')) ? {userScore : 0, comScore : 0} : JSON.parse(localStorage.getItem('score'));
  })

  // const [userScore, setUserScore] = useState(() => {
  //   return !JSON.parse(localStorage.getItem('userScore')) ? 0 : JSON.parse(localStorage.getItem('userScore'))
  // });
  // const [comScore, setComScore] = useState(() => {
  //   return !JSON.parse(localStorage.getItem('comScore')) ? 0 : JSON.parse(localStorage.getItem('comScore'))
  // });


  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    const comChoice = randomChoice();
    setComSelect(comChoice);
    const gameResult = judgement(choice[userChoice], comChoice);
    setResult(gameResult);

    if(gameResult === "WIN") {
      setScore({
        ...score,
        userScore : score.userScore + 1
      })
    } else {
      setScore({
        ...score,
        comScore : score.comScore + 1
      })
    }

    // if(gameResult !== "TIE") {
    //   gameResult === "WIN" ? setUserScore(userScore + 1) : setComScore(comScore + 1);
    // }
  }

  const randomChoice = () => {
    const itemArr = Object.keys(choice);
    const randomItem = Math.floor(Math.random() * itemArr.length);
    return choice[itemArr[randomItem]]; 
  }


  // WIN (You 기준)
  // You == Scissros | Compuper == Paper 
  // You == Rock     | Computer == Scissors
  // You == Paper    | Computer == Rock
  // LOSE
  // You == Scissros | Compuper == Rock 
  // You == Rock     | Compuper == Paper 
  // You == Paper    | Computer == Scissors
  // TIE 
  // You와 컴퓨터의 값이 같다
  const judgement = (user, com) => {
    const you = user.name;
    const computer = com.name;

    if(you === computer) {
      return "TIE";
    } else if(you === "Scissors") {
      return computer === "Paper" ? "WIN" : "LOSE";
    } else if(you === "Rock") {
      return computer === "Scissors" ? "WIN" : "LOSE";
    } else if(you === "Paper") {
      return computer === "Rock" ? "WIN" : "LOSE";
    }
  }

  const reset = () => {
    // setUserScore(0);
    // setComScore(0);
    setScore({userScore : 0, comScore : 0})
    setUserSelect(null);
    setComSelect(null);
    setResult("");
  }

  useEffect(() => {
    localStorage.setItem('score', JSON.stringify(score))
  }, [score])

  // useEffect(() => {
  //   localStorage.setItem('userScore', JSON.stringify(userScore));
  // }, [userScore]);

  // useEffect(() => {
  //   localStorage.setItem('comScore', JSON.stringify(comScore));
  // }, [comScore]);


  return (
    <div className='wrapper'>
      <Score score={score} reset={reset}/>

      <div className="main-box">
        <Box title="You" item={userSelect} result={result} />
        <Box title="Computer" item={comSelect} result={result}/>
      </div>

      <div className='choice-btn'>
        <button onClick={() => play("scissors")}>
          <img src={choice.scissors.img} alt="scissors" />
        </button>
        <button onClick={() => play("rock")}>
          <img src={choice.rock.img} alt="rock" />
        </button>
        <button onClick={() => play("paper")}>
          <img src={choice.paper.img} alt="paper" />
        </button>
      </div>
    </div>
  );
}

export default App;
