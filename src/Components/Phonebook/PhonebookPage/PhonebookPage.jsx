/* eslint-disable react-hooks/exhaustive-deps */
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getContacts } from '../../../reducer/contacts/api';
import { container } from './PhonebookPage.module.css';

const Phonebook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, []);

  return (
    <div className={container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default Phonebook;
