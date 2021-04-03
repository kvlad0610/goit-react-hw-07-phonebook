import { item } from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  contactsSelector,
  filterSelector,
  isLoadingSelector,
} from '../../../reducer/contacts/selector';
import { deleteContact } from '../../../reducer/contacts/api';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelector);
  const filter = useSelector(filterSelector);
  const isLoading = useSelector(isLoadingSelector);

  function deleteCont(contactId) {
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
