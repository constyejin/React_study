import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authenticateAction } from '../redux/actions/authenticateAction';
import { useState } from 'react';

const Login = ({ setAuthenticate }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const loginUser = (e) => {
    const email = document.querySelector('.login-email input').value;
    const pw = document.querySelector('.login-pw input').value;
    const alert = document.querySelector('.login-alert');
    e.preventDefault();

    if(email !== '' && pw !== '') {
    dispatch(authenticateAction.login(id, pw));
      navigate('/');
    } else {
      alert.style.display = 'block'
    }
  };


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

      <form onSubmit={loginUser} action="" className='login-box'>
        <div className='login-input-box login-email'>
          <input onChange={(e) => setId(e.target.value)} type="text" placeholder='아이디'/>
        </div>

        <div className='login-input-box login-pw'>
          <input onChange={(e) => setPw(e.target.value)} type="password" placeholder='비밀번호'/>
        </div>

       <span className='login-alert'>아이디 및 비밀번호를 입력하세요.</span>

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
