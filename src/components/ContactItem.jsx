import React, { useState } from "react";

function ContactItem({ contact, deleteContact, editContact }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newName, setNewName] = useState(contact.name);
    const [newPhone, setNewPhone] = useState(contact.phone);

    const saveEdit = () => {
        editContact(contact.id, newName, newPhone);
        setIsEditing(false);
    };

    const cancelEdit = () => {
        setNewName(contact.name);
        setNewPhone(contact.phone);
        setIsEditing(false);
    };

    return (
        <div className="contact-item">

            {/* Якщо режим редагування увімкнено */}
            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                    />

                    <input
                        type="text"
                        value={newPhone}
                        onChange={(e) => setNewPhone(e.target.value)}
                    />

                    <button className="contact-btn" onClick={saveEdit}>
                        Зберегти
                    </button>

                    <button className="contact-btn" onClick={cancelEdit}>
                        Скасувати
                    </button>
                </>
            ) : (
                <>
                    <span className="contact-name">{contact.name}</span>
                    <span className="contact-phone">{contact.phone}</span>

                    <button
                        className="contact-btn"
                        onClick={() => setIsEditing(true)}
                    >
                        Редагувати
                    </button>

                    <button
                        className="contact-btn"
                        onClick={() => deleteContact(contact.id)}
                    >
                        Видалити
                    </button>
                </>
            )}

        </div>
    );
}

export default ContactItem;
