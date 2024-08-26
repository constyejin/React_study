import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'

const ContactForm = () => {
  return (
    <div className='contact-form'>
      <div className="contact-modal">
        <div className='modal-close-btn'>
          <FontAwesomeIcon icon={faClose} />
        </div>

        <form action="">
          <div className='profile'>
            <img src="https://www.jetbrains.com/community/user-groups/img/user-group.svg" alt="" />
            <input type="file" />
          </div>

          <div className="input-box name">
            <input type="text" placeholder='Name' />
          </div>

          <div className="input-box num">
            <input type="text" placeholder='Phone Numner' />
          </div>

          <div className="input-box num">
            <input type="email" placeholder='E-mail' />
          </div>

          <button className='create-btn' type='submit'>Create</button>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
 