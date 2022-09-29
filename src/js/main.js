
// Import all of Bootstrap's JS
import '../scss/styles.scss';
import * as bootstrap from 'bootstrap';
import nav from "../../components/nav.js";
import _ from 'lodash';
import Icon from '../majeur.png';

function component() {
    const element = document.createElement('div');
    const myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);

    document.body.appendChild(element);
}

document.body.appendChild(nav());

component();


export const routes = {
    home: '/',
    about: '/about',
    contact: '/contact',
    notFound: '/notFound'
}

export const getRoute = () => {
    Object.entries(routes).forEach(([key, value]) => {
        if (window.location.pathname === value) {
            return key;
        }
        return routes.notFound;
    })
}