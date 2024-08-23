import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';

import logo from '../assets/images/logo.png';

const Gnb = ( {authenticate} ) => {
  const menuList = ['shop', 'archive', 'q&a', 'location'];
  const joinList = [authenticate == true ? 'logout' : 'login', 'cart', 'search'];

  return (
    <header className='gnb'>
      <div className='gnb-wrapper'>
        <h1 className='logo'>
          <Link to='/'>
            <img src={logo} alt='logo' />
          </Link>
        </h1>
        <nav>
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
        <ul className='gnb-join-list'>
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
  )
}

export default Gnb
