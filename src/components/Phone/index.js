import insertElement from '../../commons/functions/insertElement.js';

export default function getPhone() {
    const root = document.querySelector('#main-content');
    const title = insertElement('h1', 'content', root);
    title.appendChild(document.createTextNode('Smartphone'));
    title.style.textAlign = 'center';
    return root;
}