import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='login'>
      {/* <div className='login-naver'>
        <img src="https://vendor-cdn.imweb.me/images/naver_login2x.png" alt="naver icon" />
        <p>네이버로 시작하기</p>
      </div>

      <div>
        <img src="https://vendor-cdn.imweb.me/images/kakao_icon.png" alt="kakao icon" />
        <p>카카오로 시작하기</p>
      </div> */}

      {/* <div className='login-or'>
        <div className='line'></div>
        <div>또는</div>
        <div className='line'></div>
      </div> */}

      <form action="" className='login-box'>
        <div className='login-input-box login-email'>
          <input type="text" placeholder='이메일'/>
        </div>

        <div className='login-input-box login-pw'>
          <input type="password" placeholder='비밀번호'/>
        </div>

        <div className='login-stay'>
          <label>
            <input type="checkbox" />
            <span>로그인상태유지</span>
          </label>
        </div>

        <button type='submit' className='login-btn'>로그인</button>
      </form>
      
      <div className='register-find'>
        <Link to='/register'>회원가입</Link>
        <div>아이디 · 비밀번호 찾기</div>
      </div>
    </div>
  )
}

export default Login
