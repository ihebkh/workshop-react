
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000/api/users',
});

export const registerUser = async (userData) => {
    const response = await api.post('/register', userData);
    return response.data;
};

export const loginUser = async (userData) => {
    const response = await api.post('/login', userData);
    return response.data;
};

export const getUserById = async (id) => {
    const response = await api.get(`/${id}`);
    return response.data;
};

export const getAllUsers = async () => {
    const response = await api.get('/');
    return response.data;
};

export const updateUser = async (id, userData) => {
    const response = await api.put(`/${id}`, userData);
    return response.data;
};

export const deleteUser = async (id) => {
    const response = await api.delete(`/${id}`);
    return response.data;
};
