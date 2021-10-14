import React from 'react';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsSelectors, contactsOperations } from 'Redux/contacts';
import './ContactList.css';

export default function ContactsList() {
  const contacts = useSelector(contactsSelectors.getVisibleContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.getContacts());
  }, [dispatch]);

  return (
    <ul className="contactsList">
      {contacts.map(({ id, name, number }) => (
        <li key={id} className="item">
          <span className="itemText">
            <span className="itemName">{name}:</span>
            <span className="itemNum">{number}</span>
          </span>

          <button
            type="button"
            onClick={() => dispatch(contactsOperations.deleteContact(id))}
            className="button"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
