import axios from 'axios';
import {
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  deleteContactsRequest,
  deleteContactsSuccess,
  deleteContactsError,
} from './contacts-actions';

axios.defaults.baseURL = 'http://localhost:4040';

export const getContacts = () => dispatch => {
  dispatch(getContactsRequest());

  axios
    .get('/contacts')
    .then(({ data }) => dispatch(getContactsSuccess(data)))
    .catch(error => dispatch(getContactsError(error)));
};

export const addContact =
  ({ name, number }) =>
  dispatch => {
    const contact = { name, number };

    dispatch(addContactsRequest());

    axios
      .post('/contacts', contact)
      .then(({ data }) => dispatch(addContactsSuccess(data)))
      .catch(error => dispatch(addContactsError(error)));
  };

export const deleteContact = contactId => dispatch => {
  dispatch(deleteContactsRequest());
  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(deleteContactsSuccess(contactId)))
    .catch(error => dispatch(deleteContactsError(error)));
};
