import insertElement from '../../functions/insertElement.js';
import getHome from '../Home/index.js';

export default function createHomeLink(container) {
    const homeLink = insertElement('a', 'navbar-brand', container);
    homeLink.setAttribute('href', '#');
    homeLink.appendChild(document.createTextNode('2I-Market'));
    homeLink.addEventListener('click', function() {
        document.querySelectorAll('.content').forEach((item) => {
            document.querySelector('#root').removeChild(item);
        })
        getHome();
    })
}
