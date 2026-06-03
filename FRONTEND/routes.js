/**
 * Router SPA
 */

import { renderLogin } from './pages/login.js';


/**
 * Rutas disponibles
 */
const routes = {
    '/': renderLogin,
    '/index.html': renderLogin
};

/**
 * Router principal
 */
export async function router() {

    // Obtiene ruta real
    const path = window.location.pathname;
    // Busca render
    const render = routes[path];
    if (render) {
        await render();
    } else {
        document.getElementById('app').innerHTML = `
            <section>
                <h2>404 - Página no encontrada</h2>
            </section>
        `;
    }
}
