Weather App Project
-
<a href="https://ingkejin-weather.netlify.app/">프로젝트 링크</a>

<div>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=Static&logo=HTML5&logoColor=white&logoWidth=10&logoheight=20">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=Static&logo=CSS3&logoColor=white">
  <img src="https://img.shields.io/badge/Bootstrap-563D7C?sstyle=Static&logo=Bootstrap&logoColor=8965bf">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=Static&logo=JavaScript&logoColor=black">
  <img src="https://img.shields.io/badge/React-61DAFB?style=Static&logo=React&logoColor=3776AB">
</div>

<br>

<h3>Weather AP</h3>
Link : <a href="https://zzopenweathermap.org/api">https://zzopenweathermap.org/api</a>

---
<h3>UI</h3>

- 앱이 실행되면 현재 위치 날씨 정보를 보여준다. <br>

- 날씨 정보 : 해당 위치 현재시간, 섭씨, 화씨, 날씨 상태, 습도, 바람 속도 <br>

- 날씨 정보(clear, clouds, rain)에 따라 class를 추가해 그에 맞는 background-image로 변경한다. <br>

- 데이터를 가져오는 동안 로딩 스피너를 보여준다. <br>

- react-live-clock으로 각 도시의 현재 시간을 보여준다. <br>


<br>

-----

<h3>Weather API</h3>

- Seoul, Paris, London 버튼을 클릭하면 해당 도시 정보를 가져온다. <br>

- Current Location 버튼을 클릭하면 현재 위치를 기반으로 다시 정보를 가져온다. <br>



<br>

1. async 함수 'getWeatherByCurrentLocation' 정의
2. fetch로 url 데이터 가져오기
3. 해당 데이터 .json으로 파싱
4. await로 fetch와 json() method를 기다렸다 반환한다.
5. try - catch로 에러 처리


<code>
let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
let response = await fetch(url);
let data = await response.json();
</code>

<br>

*await는 Promise 객체가 완료될 때 까지 코드 실행을 일시 중지한다. fetch에서 에러 발생 시, await 이후 코드는 실행되지 않는다.

<br>

---

<h3>구현중인 기능</h3>

<h3>UI</h3>
- 각 도시의 시간, 날씨에 따라 .morning, .night class를 추가하여 그에 맞는 background-image를 보여준다.

