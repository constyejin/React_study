Shopping Mall Project (Redux)
-
<a href='https://ingkejin-shoppingmall.netlify.app/'>프로젝트 링크</a>

<div>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=Static&logo=HTML5&logoColor=white&logoWidth=10&logoheight=20">
  <img src="https://img.shields.io/badge/Sass-cc6699?style=Static&logo=Sass&logoColor=white">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=Static&logo=JavaScript&logoColor=black">
  <img src="https://img.shields.io/badge/React-61DAFB?style=Static&logo=React&logoColor=3776AB">
  <img src="https://img.shields.io/badge/Redux-502dc4?style=Static&logo=Redux&logoColor=fff">
</div>

<br>

---
<h3>Redux</h3>
- redux는 동기적으로 state를 처리한다.

- redux middleware중 하나인 redux-thunk 사용

- redux state값이 바뀌는 것을 바로 확인 => devTools

- 기존 asyne 함수를 미들웨어에서 다룬다.

- dispatch를 이용해서 action을 던진다.

- 기능별로 reducer 파일을 생성한다. 

- reducer 파일이 여러개일 경우 combineReducers()로 하나로 합쳐서 store 값을 전달한다.

- 객체 안에 키를 정의하고 해당 reducer를 할당한다.

- combineReducers(): 객체 형태로 합쳐서 store에 값을 전달한다.

- combineReducers() 사용시, state가 나누어지기 때문에 useSelector 사용시 key 값을 써줘야 한다.

```
const productList = useSelector(state => state.productList); // X
const productList = useSelector(state => state.product.productList); // O
```

---

<h3>Installed</h3>

<a href='https://github.com/reduxjs/redux-thunk'>Redux thunk</a>

<a href="https://chromewebstore.google.com/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=ko">Redux DevTools</a>

<a href="https://www.npmjs.com/package/redux-devtools-extension">Redux DevTools Extension's helper</a>

```
npm install @redux-devtools/extension  
```
