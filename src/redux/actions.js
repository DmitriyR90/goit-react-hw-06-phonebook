import { createAction } from '@reduxjs/toolkit';
import { customAlphabet } from 'nanoid';
// import { nanoid } from 'nanoid';

const nanoid = customAlphabet('1234567890abc', 7);

export const addContact = createAction('contacts/addContact', value => {
  console.log(value);
  return {
    payload: {
      ...value,
      id: nanoid(),
    },
  };
});

export const deleteContact = createAction('contacts/deleteContact');

export const setFilter = createAction('filter/setFilter');
