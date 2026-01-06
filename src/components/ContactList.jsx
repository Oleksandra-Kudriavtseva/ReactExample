import React from "react";
import ContactItem from "./ContactItem";

function ContactList({ contacts, deleteContact, editContact }) {
    if (contacts.length === 0) {
        return <p>Список порожній</p>;
    }

    return (
        <ul className="contact-list">
            {contacts.map((contact) => (
                <li key={contact.id} className="contact-row">
                    <ContactItem
                        contact={contact}
                        deleteContact={deleteContact}
                        editContact={editContact}
                    />
                </li>
            ))}
        </ul>
    );
}

export default ContactList;
