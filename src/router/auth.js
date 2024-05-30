// auth.js

import axios from 'axios';

let user = null;

export async function login(email, password) {
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/login`, { email, password });
    if (response.data.access_token) {
        localStorage.setItem('authToken', response.data.access_token);
        return true;
    }
    return false;
}

export function logout() {
    user = null;
    localStorage.removeItem('authToken');
}

export function isAuthenticated() {
    const token = localStorage.getItem('authToken');
    return !!token;
}

export function getUser() {
    return user;
}
