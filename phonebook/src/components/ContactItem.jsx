import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


const ContactItem = ({item}) => {
  return (
    <div className='contact-user-item'>
      <div className='user-profile'>
        <img src={item.profileImg} alt={item.profileImgAlt} />
      </div>

      <h3 className='user-name'>{item.name}</h3>

      <div className='user-info'>
        <div className='user-phone'>
          <div className='user-icon'>
            <FontAwesomeIcon icon={faPhone} />
          </div>
          <p>{item.phone}</p>
        </div>

        <div className='user-email'>
          <div className='user-icon'>
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <p>{item.email}</p>
        </div>
      </div>
    </div>
  )
}

export default ContactItem
