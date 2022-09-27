import insertElement from '../../functions/insertElement.js';
import getPhone from '../Phone/index.js';
import getComputer from '../Computer/index.js';
import getConsole from '../Console/index.js';
import getAppliances from '../Appliances/index.js';

const navigationItems = [{
    click: getPhone,
    href: '#',
    name: 'Smartphone',
}, {
    click: getComputer,
    href: '#',
    name: 'Ordinateur',
}, {
    click: getConsole,
    href: '#',
    name: 'Console',
}, {
    click: getAppliances,
    href: '#',
    name: 'Eléctroménager',
}];

export default function createNavigationList(container) {
    const navList = insertElement('ul', 'navbar-nav me-auto mb-2 mb-lg-0', container);
    navigationItems.forEach((navigationItem) => {
        const navListItem = insertElement('li', 'nav-item', navList);
        const navListItemLink = insertElement('a', 'nav-link', navListItem);
        navListItemLink.setAttribute('href', navigationItem.href);
        navListItemLink.appendChild(document.createTextNode(navigationItem.name));
        navListItemLink.addEventListener('click', function() {
            document.querySelectorAll('.content').forEach((item) => {
                document.querySelector('#root').removeChild(item);
            })
            navigationItem.click();
        })
    });
}
