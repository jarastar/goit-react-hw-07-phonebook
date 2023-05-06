import axios from 'axios';

const contactsInstance = axios.create({
  baseURL: 'https://64549275f803f345762bc8d6.mockapi.io/contacts',
});

export const getAllContacts = async () => {
  const { data } = await contactsInstance.get('/');
  return data;
};

export const addNewContact = async contact => {
  const { data } = await contactsInstance.post('/', contact);
  return data;
};

export const removeContact = async id => {
  const { data } = await contactsInstance.delete(`/${id}`);
  return data;
};