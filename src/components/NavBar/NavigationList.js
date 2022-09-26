import insertElement from '../../functions/insertElement.js';

const navigationItems = [{
    href: '#',
    name: 'Smartphone',
}, {
    href: '#',
    name: 'Ordinateur',
}, {
    href: '#',
    name: 'Console',
}, {
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
    });
}
