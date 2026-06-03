/**
 * API Clients
 * Instancias Axios por servicio.
 */
import createHttpClient from '../utils/httpClient.js';

/**
 * Cliente servicio de autenticación
 * Puerto 3001
 */
export const authClient = createHttpClient(import.meta.env.VITE_AUTH_API_URL);

/**
 * Cliente servicio de datos
 * Puerto 3002
 */
export const dataClient = createHttpClient(import.meta.env.VITE_DATA_API_URL);