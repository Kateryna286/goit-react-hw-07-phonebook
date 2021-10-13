import { createAction } from '@reduxjs/toolkit';
//import { v4 as uuidv4 } from 'uuid';

// export const addContact = createAction('contacts/Add', data => ({
//   payload: {
//     id: uuidv4(),
//     name: data.name,
//     number: data.number,
//   },
// }));

// export const deleteContact = createAction('contacts/Delete');
export const getContactsRequest = createAction('contacts/getContactRequest');
export const getContactsSuccess = createAction('contacts/getContactSuccess');
export const getContactsError = createAction('contacts/getContactError');

export const addContactsRequest = createAction('contacts/addContactRequest');
export const addContactsSuccess = createAction('contacts/addContactSuccess');
export const addContactsError = createAction('contacts/addContactError');

export const deleteContactsRequest = createAction(
  'contacts/deleteContactRequest',
);
export const deleteContactsSuccess = createAction(
  'contacts/deleteContactSuccess',
);
export const deleteContactsError = createAction('contacts/deleteContactError');

export const updateFilter = createAction('contacts/UpdateFilter');
