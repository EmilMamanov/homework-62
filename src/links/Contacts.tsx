import React, { useState } from 'react';
import '../App.css';

const Contacts: React.FC = () => {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Phone:', phone);
        console.log('Name:', name);
    };

    return (
        <div>
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <div className="field">
                    <label>Email:</label>
                    <input className="contact-input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="field">
                    <label>Phone:</label>
                    <input className="contact-input" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div className="field">
                    <label>Name:</label>
                    <input className="contact-input" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Contacts;