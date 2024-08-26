import React from 'react';
import { useSelector } from 'react-redux';
import ContactItem from './ContactItem';

const ContactList = () => {
  const contactList = useSelector(state => state.contactList);

  return (
    <div className='contact-user-list'>
      {
        contactList.map((item) => <ContactItem item={item} /> )
      }
    </div>
  )
}

export default ContactList
