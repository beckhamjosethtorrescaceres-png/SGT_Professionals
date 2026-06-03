import { loadHTML } from '../utils/helpers.js';
export async function renderLogin(){

    const content = document.getElementById('app');
    content.innerHTML = await loadHTML(
        '/FRONTEND/views/login.html'
    );

}
