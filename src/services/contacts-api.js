import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4040';

// export async function fetchContacts() {
//   const { data } = await axios.get(`/contacts`);
//   return data;
// }

export const fetchContacts = () => {
  return axios.get('/contacts').then(response => response.data);
};

export const addContact = contact => {
  return axios.post('/contacts', contact).then(({ data }) => data);
};

export const deleteContact = contactId => {
  return axios.delete(`/contacts/${contactId}`);
};

export const updateContacts = (contactId, update) => {
  return axios.patch(`/contacts/${contactId}`, update).then(({ data }) => data);
};
