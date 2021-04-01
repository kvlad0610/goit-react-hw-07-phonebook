import { item } from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../../reducer/contacts/api';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filters);
  const isLoading = useSelector(state => state.contacts.isLoading);

  function deleteCont(contactId) {
    console.log(contactId);
    return dispatch(deleteContact(contactId));
  }

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {visibleContacts.map(({ id, name, number }) => (
            <li className={item} key={id}>
              {name}:{number}
              <IconButton aria-label="delete" onClick={() => deleteCont(id)}>
                <DeleteIcon />
              </IconButton>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
