import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ContactItem from './ContactItem';

const ContactList = () => {
  const { contactList, keyword } = useSelector(state => state);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    if(keyword !== '') {
      let list = contactList.filter((item) => item.name.includes(keyword));
      setFilteredList(list);
    } else {
      setFilteredList(contactList);
    }
  }, [keyword, contactList]);

  return (
    <>
      <p className='contact-length'>{filteredList.length}개의 연락처</p>
      <div className='contact-user-list'>
        {
          filteredList.map((item, index) => <ContactItem item={item} key={index} /> )
        }
      </div>
    </>
  )
}

export default ContactList
