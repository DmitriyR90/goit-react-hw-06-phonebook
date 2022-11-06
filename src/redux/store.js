import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice, filterSlice } from './slice';

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    filter: filterSlice.reducer,
  },
});

/*
import { contactsReducer, filterReducer } from './old_test/reducer';
export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
*/
