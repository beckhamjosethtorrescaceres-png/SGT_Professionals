/**
 * Axios HTTP Client
 * Factory de instancias Axios por baseURL.
 */
import axios from 'axios';

const CONTENT_TYPE = import.meta.env.VITE_CONTENT_TYPE;
const TIME_OUT = import.meta.env.VITE_TIME_OUT;

/**
 * @param {string} baseURL - URL base del servicio
 */
const createHttpClient = (baseURL) => {
    const client = axios.create({
        baseURL,
        timeout: TIME_OUT,
        headers: {
            'Content-Type': CONTENT_TYPE
        }
    });

    client.interceptors.request.use(
        config => {
            console.log(`[REQUEST]: ${config.method?.toUpperCase()} ${config.url}`);
            return config;
        },
        error => Promise.reject(error)
    );

    client.interceptors.response.use(
        response => response,
        error => {
            console.error('[API ERROR]:', error.response?.data || error.message);
            return Promise.reject(error);
        }
    );

    return client;
};

export default createHttpClient;