// src/components/DeleteUser.js
import React from 'react';
import { deleteUser } from '../service/User';

const DeleteUser = ({ userId }) => {
    const handleDelete = async () => {
        try {
            const response = await deleteUser(userId);
            console.log('User deleted:', response);
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    return (
        <button onClick={handleDelete}>Delete User</button>
    );
};

export default DeleteUser;
