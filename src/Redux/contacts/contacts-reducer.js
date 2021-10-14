import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  getContactsSuccess,
  getContactsRequest,
  getContactsError,
  addContactsSuccess,
  addContactsRequest,
  addContactsError,
  deleteContactsRequest,
  deleteContactsSuccess,
  deleteContactsError,
  updateFilter,
  getError,
} from './contacts-actions';

// const error = createReducer(null, {
//   [actions.fetchContactsError]: (_, action) => action.payload,
//   [actions.fetchContactsRequest]: () => null,
// });

const items = createReducer([], {
  [getContactsSuccess]: (_, { payload }) => payload,
  [addContactsSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactsSuccess]: (state, { payload }) =>
    state.filter(item => item.id !== payload),
});

const filter = createReducer('', {
  [updateFilter]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [getContactsRequest]: () => true,
  [getContactsSuccess]: () => false,
  [getContactsError]: () => false,
  [addContactsRequest]: () => true,
  [addContactsSuccess]: () => false,
  [addContactsError]: () => false,
  [deleteContactsRequest]: () => true,
  [deleteContactsSuccess]: () => false,
  [deleteContactsError]: () => false,
});

const error = createReducer(null, {
  [getError]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
  loading,
  error,
});
