// src/components/Login.js
import React, { useState } from 'react';
import { loginUser } from '../service/User';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userData = { email, password };
            const response = await loginUser(userData);
            console.log('User logged in:', response);
        } catch (error) {
            console.error('Error logging in user:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
