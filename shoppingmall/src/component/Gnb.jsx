import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';

import logo from '../assets/images/logo.png';

const Gnb = () => {
  const menuList = ['shop', 'genuine artist', 'archive', 'q&a', 'location'];
  const joinList = ['register', 'sign', 'cart', 'search'];

  return (
    <header className='gnb'>
      <h1 className='logo'>
        <Link to='/'>
          <img src={logo} alt='logo' />
        </Link>
      </h1>

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
    </header>
  )
}

export default Gnb
