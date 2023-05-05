import ContactForm from './ContactForm/ContactForm';
import Contacts from './Contacts/Contacts';
import { PhoneBookStyles } from './PhoneBook.styled';

const PhoneBook = () => {
  return (
    <PhoneBookStyles>
      <h1>Phonebook</h1>
      <ContactForm />
      <Contacts />
    </PhoneBookStyles>
  );
};

export default PhoneBook;