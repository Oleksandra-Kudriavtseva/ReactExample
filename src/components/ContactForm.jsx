import React, { useState } from "react";

function ContactForm({ addContact }) {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim() || !phone.trim()) return;
        addContact({ name, phone });
        setName("");
        setPhone("");
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <input
                type="text"
                placeholder="Прізвище та ім’я"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Телефон"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />
            <button type="submit">Додати</button>
        </form>
    );
}

export default ContactForm;
