import React, { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState([]);


  useEffect(() => {
    const savedContacts = localStorage.getItem("contacts");
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts));
    }
  }, []);


  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);


  const addContact = (contact) => {
    setContacts([...contacts, { ...contact, id: Date.now() }]);
  };


  const deleteContact = (id) => {
    setContacts(contacts.filter((c) => c.id !== id));
  };


  const editContact = (id, newName, newPhone) => {
    const updated = contacts.map(c =>
        c.id === id ? { ...c, name: newName, phone: newPhone } : c
    );
    setContacts(updated);
  };


  return (
      <div className="app">
        <h1>Телефонна книга</h1>
        <ContactForm addContact={addContact} />
        <ContactList
            contacts={contacts}
            deleteContact={deleteContact}
            editContact={editContact}
        />
      </div>
  );
}

export default App;
