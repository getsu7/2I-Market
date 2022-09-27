import insertElement from '../../functions/insertElement.js';

export default function getPhone() {
    const root = document.querySelector('#root');
    const title = insertElement('h1', 'content', root);
    title.appendChild(document.createTextNode('Smartphone'));
    title.style.textAlign = 'center';
}