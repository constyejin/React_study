import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import logo from '../assets/images/logo.png';

const Gnb = ( {authenticate, setAuthenticate } ) => {
  const menuList = ['shop', 'archive', 'q&a', 'location'];
  const joinList = [ authenticate == true ? 'my acount' : 'register', 
                     authenticate == true ? 'logout' : 'login', 
                     'cart'];

  const sidebarOpen = () => {
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.overlay');
    sidebar.classList.add('active');
    overlay.classList.add('active');
  }
  
  const sidebarClose = () => {
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.overlay');
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
  }

  const navigate = useNavigate();
  const loginToggle = (e) => {
    if(e.target.innerHTML === 'LOGIN') {
      setAuthenticate(true);
      navigate('/login');
    } else if(e.target.innerHTML === 'LOGOUT') {
      setAuthenticate(false);
      navigate('/');
    }
  }

  return (
    <>
      <header className='gnb'>
        <div className='gnb-wrapper'>
          <h1 className='logo'>
            <Link to='/'>
              <img src={logo} alt='logo' />
            </Link>
          </h1>

          <div onClick={sidebarOpen} className='sidebar-btn lg-hidden'>
            <FontAwesomeIcon icon={faBars} />
          </div>

          <nav className='lg-only'>
            <h2 className='visually-hidden'>메뉴</h2>
            <ul className='gnb-menu-list'>
              {
                menuList.map((menu, index) => {
                  return (
                    <li key={index}>
                      <Link to={menu.split(' ').join('')}>
                        {menu.toUpperCase()}
                      </Link>
                    </li>
                  )
                })
              }
            </ul>
          </nav>

          <ul className='gnb-join-list lg-only'>
            {
              joinList.map((menu, index) => {
                return (
                  <li onClick={loginToggle} key={index}>
                    {menu.toUpperCase()}
                  </li>
                )
              })
            }
          </ul>
        </div>
      </header>

      <aside className='sidebar lg-hidden'>
        <ul>
          {
            joinList.map((menu, index) => {
              return (
                <li key={index}>
                  <Link to={menu.split(' ').join('')}>
                    {menu.toUpperCase()}
                  </Link>
                </li>
              )
            })
          }
        </ul>

        <ul>
          {
            menuList.map((menu, index) => {
              return (
                <li key={index}>
                  <Link to={menu.split(' ').join('')}>
                    {menu.toUpperCase()}
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </aside>

      <div onClick={sidebarClose} className="overlay"></div>
    </>
  )
}

export default Gnb
