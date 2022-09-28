import { AllProductsComponent } from "./AllProducts.js";

import { BonsPlansComponent } from "./BonsPlans.js";

import { SmartphonesComponent } from "./Smartphones.js";

import { PcMacComponent } from "./PcMacComponent.js";

import { createMenu } from "./functions.js";

import { createCarousel } from "./functions.js";

import { container } from "./functions.js";

import { createCard } from "./functions.js";

const body = document.body;

const h2 = document.createElement('h2');

const menu = {
    home: {
        title: "2iMarket",
        attributs: 
            {
                class: "nav-link",
                href: "#",
            },  
    },
    allProducts: {
        title: "Tous les produits",
        attributs: 
            {
                class: "nav-link",
                href: "#",
            },
    },
    bonsPlans: {
        title: "Bons plans",
        attributs:
            {
                class: "nav-link",
                href: "#",
            },
    },
    smartphones: {
        title: "Smartphones",
        attributs:
            {
                class: "nav-link",
                href: "#",
            },
    },
    pcMac: {
        title: "Pc/Mac",
        attributs:
            {
                class: "nav-link",
                href: "#",
            },
    },
};
createMenu(menu)

document.querySelectorAll('a[class="nav-link"]').forEach((item) => {
            console.log(item.innerText);
    item.addEventListener('click', (e) => {
            e.preventDefault();
            container.replaceChildren();
            switch (item.innerText) {
                case 'Tous les produits':
                    container.appendChild(AllProductsComponent);
                    break;
                case 'Bons plans':
                    container.appendChild(BonsPlansComponent);
                    break;
                case 'Smartphones':
                    container.appendChild(SmartphonesComponent);
                    break;
                case 'Pc/Mac':
                    container.appendChild(PcMacComponent);
                    break;
            }
        })   
})

const titreTopVente = document.createTextNode("Le Top des ventes");
h2.appendChild(titreTopVente);

h2.style.marginLeft = '5%';
h2.style.textDecoration = 'underline';

const carousel = {
    item1:{
        attributs: {
            class: 'carousel-item active',
        },
        img: {
            src: 'images/proxy-image.jpg',
            attributs: {
                class: 'd-block w-20',
            }
        }
    },
    item2:{
        attributs: {
            class: 'carousel-item',
        },
        img: {
            src: 'images/proxy-image.png',
            attributs: {
                class: 'd-block w-20',
            }
        }
    },
    item3:{
        attributs: {
            class: 'carousel-item',
        },
        img: {
            src: 'images/proxy-image3.jpg',
            attributs: {
                class: 'd-block w-20',
            }
        }
    }   
}

createCarousel(carousel);

const cards = {
    card1:{
        title: 'Card 1',
        paragraphe: 'Lorem Ipsum',
        img: {
            src: 'images/proxy-image3.jpg',
            class: 'card-img-top',
            width: '100%',
            height: '100%',
        },
        link: {
            href: '#',
            texte: 'Go somewhere',
        }
    },
    card2:{
        title: 'Card 2',
        paragraphe: 'Lorem Ipsum - Card 2',
        img: {
            src: 'images/proxy-image3.jpg',
            class: 'card-img-top',
            width: '100%',
            height: '100%',
        },
        link: {
            href: '#',
            texte: 'Go somewhere',
        }
    },
    card3:{
        title: 'Card 3',
        paragraphe: 'Lorem Ipsum - Card 3',
        img: {
            src: 'images/proxy-image3.jpg',
            class: 'card-img-top',
            width: '100%',
            height: '100%',
        },
        link: {
            href: '#',
            texte: 'Go somewhere',
        }
    },
    card4:{
        title: 'Card 4',
        paragraphe: 'Lorem Ipsum - Card 4',
        img: {
            src: 'images/proxy-image3.jpg',
            class: 'card-img-top',
            width: '100%',
            height: '100%',
        },
        link: {
            href: '#',
            texte: 'Go somewhere',
        }
    },
    
}

container.appendChild(h2);

createCard(cards);

body.appendChild(container);