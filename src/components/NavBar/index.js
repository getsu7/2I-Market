import insertElement from '../../functions/insertElement.js';

import createHomeLink from './HomeLink.js';
import createToggleButton from './ToggleButton.js';
import createNavigationContainer from './NavigationContainer.js';

export default function createNavBar() {
    const root = document.querySelector('#root');
    const navBar = insertElement('nav', 'navbar navbar-expand-lg bg-dark', root);
    const container = insertElement('div', 'container-fluid', navBar);
    createHomeLink(container);
    createToggleButton(container);
    createNavigationContainer(container);
}