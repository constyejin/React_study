import React from 'react';
import { useSelector } from 'react-redux';
import ContactItem from './ContactItem';

const ContactList = () => {
  const contactList = useSelector(state => state.contactList)
  console.log(contactList);
  return (
    <div className='contact-user-list'>
      {
        contactList.map((item) => <ContactItem /> )
      }
    </div>
  )
}

export default ContactList
