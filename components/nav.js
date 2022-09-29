import {createElementAndSetAttributes} from "../composable/straps.js";
import * as bootstrap from 'bootstrap';

const routes = {
    Home: {
        name: '2I Market',
        attributes: {
            className: 'navbar-brand',
            href : '#/',
        }
    },
    Products: {
        name: 'Tous les produits',
        attributes: {
            className: 'nav-link',
            href: '#/products',
        }
    },
    BonPlans: {
        name: 'Bons plans',
        attributes: {
            className: 'nav-link',
            href: '#/bonplans',
        }
    },
    Smartphone: {
        name: 'Smartphone',
        attributes: {
            className: 'nav-link',
            href: '#/smartphone',
        }
    },
    PcMac: {
        name: 'Pc / Mac',
        attributes: {
            className: 'nav-link',
            href : '#/pcmac'
        },

    }
}

export default () => {
    //container
    const nav = createElementAndSetAttributes('nav', {'class' : 'navbar navbar-expand-lg bg-dark navbar-dark'}, document.body);
    const divContainer = createElementAndSetAttributes('div', {'class' : 'container-fluid'}, nav);

    //navbar Brand
    createElementAndSetAttributes('a', {'class' : routes.Home.attributes.className, 'href' : routes.Home.attributes.href, 'style' : 'color:white;'}, divContainer).appendChild(document.createTextNode(routes.Home.name));

    //bugger menu
    const menuBugger = createElementAndSetAttributes('button', {'class':'navbar-toggler', 'type':'button', 'data-bs-toggle':'collapse', 'data-bs-target':'#navbarSupportedContent', 'aria-controls':'navbarSupportedContent', 'aria-expended':'false', 'aria-label':'Toggle navigation'}, divContainer);
    createElementAndSetAttributes('span', {'class':'navbar-toggler-icon'}, menuBugger);


    const divCollapse = createElementAndSetAttributes('div', {'class' : 'collapse navbar-collapse', 'id' : 'navbarSupportedContent'}, divContainer)
    const ul = createElementAndSetAttributes('ul', {'class' : 'navbar-nav me-auto mb-2 mb-lg-0'}, divCollapse)
    const liAbout = createElementAndSetAttributes('li', {'class':'nav-item'}, ul);
    createElementAndSetAttributes('a', {'class' : routes.Products.attributes.className, 'href' : routes.Products.attributes.href}, liAbout).appendChild(document.createTextNode(routes.Products.name));

    const liBonPlans = createElementAndSetAttributes('li', {'class':'nav-item'}, ul);
    createElementAndSetAttributes('a', {'class' : routes.BonPlans.attributes.className, 'href' : routes.BonPlans.attributes.href}, liBonPlans).appendChild(document.createTextNode(routes.BonPlans.name));

    const liSmartphone = createElementAndSetAttributes('li', {'class':'nav-item'}, ul);
    createElementAndSetAttributes('a', {'class' : routes.Smartphone.attributes.className, 'href': routes.Smartphone.attributes.href}, liSmartphone).appendChild(document.createTextNode(routes.Smartphone.name));

    const liPcMac = createElementAndSetAttributes('li', {'class':'nav-item'}, ul);
    createElementAndSetAttributes('a', {'class' : routes.BonPlans.attributes.className, 'href': routes.BonPlans.attributes.href}, liPcMac).appendChild(document.createTextNode(routes.BonPlans.name));

    const formSearch = createElementAndSetAttributes('form', {'class':'d-flex', 'role':'search'}, divCollapse);
    createElementAndSetAttributes('input', {'class': 'form-control me-2', 'type':'search', 'placeholder':'Rechercher', 'aria-label':'Search'}, formSearch);

    return nav;

}