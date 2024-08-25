import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import logo from '../assets/images/logo.png';

const Gnb = ( {authenticate} ) => {
  const menuList = ['shop', 'archive', 'q&a', 'location'];
  const joinList = [ authenticate == true ? 'my acount' : 'register', authenticate == true ? 'logout' : 'login', 'cart'];

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
                  <li key={index}>
                    <Link to={menu.split(' ').join('')}>
                      {menu.toUpperCase()}
                    </Link>
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
