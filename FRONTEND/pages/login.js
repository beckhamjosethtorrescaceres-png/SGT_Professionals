import { loadHTML } from '../utils/helpers.js';
import { toggle } from '../js/login.js';

export async function renderLogin(){

    const content = document.getElementById('app');
    content.innerHTML = await loadHTML(
        './FRONTEND/views/login.html'
    );

}