import { dataClient } from './api.js';

export async function getTickets() {
    try {
        const response = await dataClient.get('/tickets');
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function createTicket(ticketData) {
    try {
        const response = await dataClient.post('/tickets', ticketData);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function updateTicket(id, ticketData) {
    try {
        const response = await dataClient.patch(`/tickets/${id}`, ticketData);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function deleteTicket(id) {
    try {
        await dataClient.delete(`/tickets/${id}`);
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}