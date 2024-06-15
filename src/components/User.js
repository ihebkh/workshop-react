// src/components/User.js
import React, { useState, useEffect } from 'react';
import { getUserById } from '../service/User';

const User = ({ userId }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await getUserById(userId);
                setUser(response);
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };

        fetchUser();
    }, [userId]);

    return (
        <div>
            {user ? (
                <div>
                    <h1>{user.name}</h1>
                    <p>Email: {user.email}</p>
                </div>
            ) : (
                <p>Loading user...</p>
            )}
        </div>
    );
};

export default User;
