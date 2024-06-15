// src/components/UpdateUser.js
import React, { useState } from 'react';
import { updateUser }  from '../service/User';

const UpdateUser = ({ userId }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userData = { email, password, name };
            const response = await updateUser(userId, userData);
            console.log('User updated:', response);
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <button type="submit">Update User</button>
        </form>
    );
};

export default UpdateUser;
