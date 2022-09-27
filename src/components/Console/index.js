import insertElement from '../../functions/insertElement.js';

export default function getConsole() {
    const root = document.querySelector('#root');
    const title = insertElement('h1', 'content', root);
    title.appendChild(document.createTextNode('Console'));
}