import { authClient } from './api.js';

export async function login(email, password) {
    try {
        const response = await authClient.get('/users', {
            params: { email, password }
        });
        return response.data[0] || null;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function register(userData) {
    try {
        const response = await authClient.post('/users', userData);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function getRoles() {
    try {
        const response = await authClient.get('/roles');
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}