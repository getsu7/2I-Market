import { createDiv } from "../Services/functions.js";
import { createCard } from "../Services/functions.js";
import { createCarousel } from "../Services/functions.js";

const titleHome = document.createElement('h2');
titleHome.appendChild(document.createTextNode("Le Top des ventes"));

titleHome.style.marginLeft = '5%';
titleHome.style.textDecoration = 'underline';

/********************************Cards Home */
const cardsHome = {
    card1:{
        title: 'Card 1',
        paragraphe: 'Lorem Ipsum',
        img: {
            src: '/src/img/proxy-image.jpg',
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
            src: '/src/img/proxy-image.jpg',
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

const containerHomeCards = document.createElement('div');
containerHomeCards.setAttribute('id', 'home-cards');

const cardContainer = createCard(cardsHome);

containerHomeCards.appendChild(cardContainer);

/*******************************Cards Home */
/*********************************Carousel Home */
const carouselHome = {
    item1:{
        attributs: {
            class: 'carousel-item active',
        },
        img: {
            src: '/src/img/proxy-image.jpg',
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
            src: '/src/img/proxy-image2.jpg',
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
            src: '/src/img/proxy-image3.jpg',
            attributs: {
                class: 'd-block w-20',
            }
        }
    }   
}

const divCarouselHome = createCarousel(carouselHome);
console.log(divCarouselHome);
/************************************Carousel Home */

export const HomeComponent = createDiv('HomeId', 'HomeClass');


HomeComponent.appendChild(divCarouselHome);
HomeComponent.appendChild(titleHome);

HomeComponent.appendChild(containerHomeCards);




