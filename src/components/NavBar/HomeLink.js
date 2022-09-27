import insertElement from '../../functions/insertElement.js';

export default function createHomeLink(container) {
    const homeLink = insertElement('a', 'navbar-brand', container);
    homeLink.setAttribute('href', '/');
    homeLink.appendChild(document.createTextNode('2I-Market'));
}
