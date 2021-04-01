import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../../reducer/contacts/api';
// import shortid from 'shortid';
import { form, label, input, button } from './ContactForm.module.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  function handleChange(e) {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;

      default:
        return;
    }
  }

  function addCont() {
    if (name !== '' && number !== '') {
      return dispatch(addContact(name, number));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    addCont();
    setName('');
    setNumber('');
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className={form}>
        <label className={label}>
          Name <br />
          <input
            className={input}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </label>
        <label className={label}>
          Number <br />
          <input
            className={input}
            type="text"
            name="number"
            value={number}
            onChange={handleChange}
          />
        </label>
        <button className={button} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
}
