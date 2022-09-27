import createCarousel from '../AdCarousel/index.js';

export default function getHome() {
    const root = document.querySelector('#root');
    createCarousel(root);
    const title = insertElement('h1', '', root);
    title.appendChild(document.createTextNode('Home'));
}