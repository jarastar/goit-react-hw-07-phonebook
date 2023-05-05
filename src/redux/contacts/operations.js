import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getAllContacts,
  removeContact,
  addNewContact,
} from 'components/services/contacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const data = await getAllContacts();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (data, thunkAPI) => {
    try {
      const result = await addNewContact(data);
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: (data, { getState }) => {
      const { name } = data;
      const { contacts } = getState();
      const normalizedName = name.toLowerCase();
      const result = contacts.items.find(({ name }) => {
        return name.toLowerCase() === normalizedName;
      });

      if (result) {
        alert(`${name} is already in contacts.`);
        return false;
      }

      return true;
    },
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      await removeContact(id);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
