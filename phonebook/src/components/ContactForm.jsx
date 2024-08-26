import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'

const ContactForm = ({ setModal }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState(0);
  const [email, setEmail] = useState('');
  const [profileImg, setProfileImg] = useState('https://www.jetbrains.com/community/user-groups/img/user-group.svg');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addContact = (e) => {
    e.preventDefault();
    dispatch({type: 'ADD_CONTACT' , payload: {name, phone, email, profileImg}});
    setModal(false);
  }

  const profileChange = (e) => {
    if(e.target.files && e.target.files[0]) {
      const reader = new FileReader();

      reader.onload = () => {
        setProfileImg(reader.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  }

  return (
    <div className='contact-form'>
      <div className="contact-modal">
        <div onClick={() => setModal(false)} className='modal-close-btn'>
          <FontAwesomeIcon icon={faClose} />
        </div>

        <form onSubmit={addContact} action="">
          <div className='profile'>
            <img src={profileImg} alt="user-img" />
            <label htmlFor="profileImg">프로필 이미지 추가</label>
            <input onChange={profileChange} id="profileImg" type="file" accept="image/*"/>
          </div>

          <div className="input-box name">
            <input onChange={(e) => setName(e.target.value)} type="text" placeholder='Name' />
          </div>

          <div className="input-box num">
            <input onChange={(e) => setPhone(e.target.value)} type="number" placeholder='Phone Number' />
          </div>

          <div className="input-box num">
            <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder='E-mail' />
          </div>

          <button className='create-btn' type='submit'>Create</button>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
 