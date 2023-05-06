import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { getFilteredContacts } from 'redux/contacts/selectors';

import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilteredContacts);
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h2>Contacts</h2>
      <Filter />
      {contacts.length ? (
        <ContactList contacts={contacts} />
      ) : (
        <p>No contacts in the list. Please add one!</p>
      )}
    </>
  );
};

export default Contacts;
