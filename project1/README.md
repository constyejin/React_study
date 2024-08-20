Rock Scissors Paper Project
-
<a href='https://ingkein-project1.netlify.app/'>프로젝트 링크</a>

<div>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=Static&logo=HTML5&logoColor=white&logoWidth=10&logoheight=20">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=Static&logo=CSS3&logoColor=white">
  <img src="https://img.shields.io/badge/Bootstrap-563D7C?sstyle=Static&logo=Bootstrap&logoColor=8965bf">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=Static&logo=JavaScript&logoColor=black">
  <img src="https://img.shields.io/badge/React-61DAFB?style=Static&logo=React&logoColor=3776AB">
</div>

<br>

---
<h3>게임 설명</h3>

- 사용자가 가위, 바위, 보 중 아이콘을 하나 선택하면 컴퓨터 값은 랜덤으로 선택 된다. 

- 선택한 값을 비교하여 Win, Lose, Tie로 결과가 나온다. 

- Win이면 점수를 +1점 획득한다. 

- 새로고침 해도 결과값이 그대로 유지 되도록 결과값을 로컬스토리지에 저장한다.

- Reset 버튼을 클릭하면 점수를 초기화 할 수 있다.

<br>

---

<h3>Javascript</h3>

- 사용자가 버튼을 클릭하면 해당 아이템 값을 함수 매개변수로 전달한다.

- 컴퓨터는 랜덤으로 아이템 중 하나 선택한다. (Object.keys()를 이용하여 key값을 배열로 만든 후 index로 랜덤 값 선택)

```
  const randomChoice = () => {
    const itemArr = Object.keys(choice);
    const randomItem = Math.floor(Math.random() * itemArr.length);
    const userRandom = choice[itemArr[randomItem]].name.toLowerCase();

    return choice[itemArr[randomItem]]; 
  }
```

- if문과 삼항연산자로 사용자 값과 컴퓨터 값을 비교하여 승패를 결정한다.

```
  if(you === computer) {
    return "TIE";
  } else if(you === "Scissors") {
    return computer === "Paper" ? "WIN" : "LOSE";
  } else if(you === "Rock") {
    return computer === "Scissors" ? "WIN" : "LOSE";
  } else if(you === "Paper") {
    return computer === "Rock" ? "WIN" : "LOSE";
  }
```

- 사용자 & 컴퓨터 점수 객체 생성 & 로컬스토리지에 점수 객체 반영 후 가져오기

- 삼항 연산자로 로컬스토리지에 점수값이 없을 경우 0을 보여주고, 아닐 경우 로컬스토리지에 저장된 점수 값을 보여준다.

```
  const [score, setScore] = useState(() => {
    return !JSON.parse(localStorage.getItem('score')) ? {userScore : 0, comScore : 0} : JSON.parse(localStorage.getItem('score'));
  })
```

<br>

---
<h3>React</h3>

- UseState로 아이템, 승패 여부, 점수값 변경 및 Props로 해당값 전달

- useEffect로 score값이 바뀔 때 마다 로컬스토리지에서 값을 가져온다.

```
  useEffect(() => {
    localStorage.setItem('score', JSON.stringify(score))
  }, [score])
```




