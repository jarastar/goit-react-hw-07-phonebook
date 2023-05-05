import PropTypes from 'prop-types';
import ContactItem from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';

const ContactList = ({ contacts }) => {
const dispatch = useDispatch();

const handleDeleteContact = id => {
dispatch(deleteContact(id));
};

return (
<List>
  {contacts.map(({ id, name, phone }) => (
<ContactItem
       key={id}
       id={id}
       name={name}
       phone={phone}
       deleteItem={handleDeleteContact}
     />
))}
</List>
);
};

ContactList.defaultProps = {
  contacts: [],
};

ContactList.propTypes = {
contacts: PropTypes.arrayOf(
PropTypes.shape({
id: PropTypes.string.isRequired,
name: PropTypes.string.isRequired,
phone: PropTypes.string.isRequired,
})
),
};


export default ContactList;