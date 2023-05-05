import PropTypes from 'prop-types';
import { Item, Bullet, DeleteBtn } from './ContactItem.styled';

const ContactItem = ({ id, name, number, deleteItem }) => {
  const handleDeleteClick = () => {
    if (window.confirm(`Do you really want to delete the contact ${name}?`)) {
      deleteItem(id);
    }
  };

  return (
    <Item>
      <Bullet />
      {name}: {number}
      <DeleteBtn type="button" onClick={handleDeleteClick}>
        Delete
      </DeleteBtn>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

export default ContactItem;
