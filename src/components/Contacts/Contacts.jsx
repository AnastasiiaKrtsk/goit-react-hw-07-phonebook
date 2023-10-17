import React from 'react';
import styles from './Contacts.module.css';

const Contacts = ({ contacts, onDeleteContact }) => {
  // console.log(contacts);
  return (
    <ul className={styles['contacts-list']}>
      {contacts.map(contact => {
        // console.log(contact.id);
        return (
          <li key={contact.id} className={styles['contact-item']}>
            <div className={styles['contact-details']}>
              {contact.name}: {contact.phone}
            </div>
            <button
              onClick={() => onDeleteContact(contact.id)}
              className={styles['delete-button']}
              type="button"
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Contacts;
