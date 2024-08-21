Shopping Mall Project
-
<a href='https://ingkejin-shoppingmall.netlify.app/'>프로젝트 링크</a>

<div>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=Static&logo=HTML5&logoColor=white&logoWidth=10&logoheight=20">
  <img src="https://img.shields.io/badge/Sass-cc6699?style=Static&logo=Sass&logoColor=white">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=Static&logo=JavaScript&logoColor=black">
  <img src="https://img.shields.io/badge/React-61DAFB?style=Static&logo=React&logoColor=3776AB">
</div>

<br>

---
<h3>Installed</h3>

<a href='https://reactrouter.com/en/main'>React Router 공식 홈페이지</a>

```
npm i react-router-dom
```

index.js

```
import { BrowserRouter } from 'react-router-dom';

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

<a href='https://docs.fontawesome.com/v5/web/use-with/react'>React | Font Awesome</a>

```
npm i --save @fortawesome/fontawesome-svg-core
npm install --save @fortawesome/free-solid-svg-icons
npm install --save @fortawesome/react-fontawesome
```

```
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
<FontAwesomeIcon icon={faCoffee} />
```

<br>
Adding Additional Styles

```
npm install --save @fortawesome/react-fontawesome
import { faUser } from '@fortawesome/free-regular-svg-icons';
```

<br>

<a href='https://www.npmjs.com/package/json-server'>Json-server</a>

```
npm install -g json-server
```

Start JSON Server
```
json-server --watch db.json --port 4000
```
5000번은 맥북에서 이미 사용되고 있는 넘버라 5000번 외에 다른 숫자를 사용해야 한다. 

<br>
RESTful API규칙에 맞춰서 API호출을 하면 JSON server가 알아서 데이터를 보내준다.


1. 전체 상품, 상품 상세, 로그인 페이지
2. 전체 상품 페이지에서는 모든 상품을 볼 수 있다.
3. 로그인 버튼을 클릭하면 로그인 페이지로 이동한다. ('/login')
4. 상품 디테일을 클릭 했을 때 로그인 되지 않은 상태 => 로그인 페이지로 이동
5. 로그인 되어 있는 상태 => 해당 상품 디테일 페이지로 이동
6. 상품 디테일 페이지에서 로그아웃시 => 로그인 페이지로 이동
7. 로그인, 로그아웃 상태에 따라 텍스트 변경
8. 상품 검색 기능
